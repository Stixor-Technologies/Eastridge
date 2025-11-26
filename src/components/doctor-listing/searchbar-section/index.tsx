"use client";
import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { doctors, Doctor } from "@/src/core/doctor";
import Image from "next/image";

interface FilterState {
  occupation: string[];
  experience: string[];
  department: string[];
}

const experienceOptions = [
  { label: "2 yrs", value: "2" },
  { label: "4 yrs", value: "4" },
  { label: "6 yrs", value: "6" },
  { label: "8+ yrs", value: "8" },
];

const getUniqueValues = (arr: Doctor[], key: keyof Doctor): string[] => {
  return Array.from(
    new Set(
      arr
        .map((item) => item[key])
        .flat()
        .filter((v): v is string => typeof v === "string"),
    ),
  );
};

const FILTERS_KEY = "doctorFilters";

interface DoctorSearchBarProps {
  onFilter?: (filteredDoctors: Doctor[]) => void;
}

const DoctorSearchBar: React.FC<DoctorSearchBarProps> = ({ onFilter }) => {
  const router = useRouter();
  // Helper function to create URL-friendly slugs from doctor names (same as in [slug]/page.tsx)
  const createSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  // Load filters from localStorage or use default
  const [filters, setFilters] = useState<FilterState>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(FILTERS_KEY);
        if (saved) return JSON.parse(saved);
      } catch {
        // ignore
      }
    }
    return { occupation: [], experience: [], department: [] };
  });

  // Save filters to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(FILTERS_KEY, JSON.stringify(filters));
    } catch {
      // ignore
    }
  }, [filters]);

  const occupationOptions = useMemo(
    () => getUniqueValues(doctors, "occupation"),
    [],
  );
  const departmentOptions = useMemo(
    () => getUniqueValues(doctors, "department"),
    [],
  );

  // Map experience filter values to min/max ranges
  const experienceRanges: Record<string, { min: number; max?: number }> = {
    "2": { min: 0, max: 2 },
    "4": { min: 3, max: 4 },
    "6": { min: 5, max: 6 },
    "8": { min: 8 }, // 8+ years
  };

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      const matchesName = doc.name.toLowerCase().includes(search.toLowerCase());
      const matchesOccupation =
        filters.occupation.length === 0 ||
        filters.occupation.includes(doc.occupation);
      const matchesExperience =
        filters.experience.length === 0 ||
        filters.experience.some((exp) => {
          const range = experienceRanges[exp];
          if (!range) return false;
          const docExp = Number(doc.experience);
          if (isNaN(docExp)) return false;
          if (range.max !== undefined) {
            return docExp >= range.min && docExp <= range.max;
          } else {
            return docExp >= range.min;
          }
        });
      const matchesDepartment =
        filters.department.length === 0 ||
        filters.department.includes(doc.department);
      // Time filter removed (no scheduling data in Doctor model)
      return (
        matchesName &&
        matchesOccupation &&
        matchesExperience &&
        matchesDepartment
      );
    });
  }, [search, filters]);

  // Call onFilter whenever filteredDoctors or onFilter changes
  useEffect(() => {
    if (onFilter) {
      onFilter(filteredDoctors);
    }
  }, [filteredDoctors, onFilter]);

  const [inputFocused, setInputFocused] = useState(false);
  const suggestions = useMemo(() => {
    if (!search && !inputFocused) return [];
    return filteredDoctors;
  }, [search, filteredDoctors, inputFocused]);

  const handleFilterChange = useCallback(
    (key: keyof FilterState, value: string) => {
      setFilters((prev) => {
        const arr = prev[key];
        return {
          ...prev,
          [key]: arr.includes(value)
            ? arr.filter((v) => v !== value)
            : [...arr, value],
        };
      });
    },
    [],
  );

  const handleReset = useCallback(() => {
    setFilters({ occupation: [], experience: [], department: [] });
  }, []);

  const activeFilterCount = useMemo(() => {
    return Object.values(filters).reduce((sum, arr) => sum + arr.length, 0);
  }, [filters]);

  const FilterSection = ({
    label,
    options,
    selectedValues,
    filterKey,
  }: {
    label: string;
    options: Array<{ label: string; value: string }> | string[];
    selectedValues: string[];
    filterKey: keyof FilterState;
  }) => (
    <div className="mb-5">
      <label className="mb-3 block text-sm font-semibold text-gray-800">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const value = typeof opt === "string" ? opt : opt.value;
          const displayLabel = typeof opt === "string" ? opt : opt.label;
          const isSelected = selectedValues.includes(value);
          return (
            <label
              key={value}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 text-sm font-medium transition-all ${
                isSelected
                  ? "bg-primary/10 text-primary border-black"
                  : "border-gray-200 bg-white text-gray-700 hover:border-black"
              }`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleFilterChange(filterKey, value)}
                className="h-4 w-4 cursor-pointer border-2 border-gray-300 accent-black focus:border-black focus:ring-0"
              />
              <span className="select-none">{displayLabel}</span>
            </label>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-full px-4 py-6">
      <div className="ml-auto max-w-lg">
        <div className="mb-6 flex flex-row gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 pr-10 transition-all focus:border-black focus:outline-none"
              placeholder="Search doctor by name..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => {
                setShowDropdown(true);
                setInputFocused(true);
              }}
              onBlur={() => {
                setTimeout(() => setShowDropdown(false), 200);
                setInputFocused(false);
              }}
            />
            {/* Search icon always visible at right, clear button overlays if search is not empty */}
            <span className="absolute top-1/2 right-3 -translate-y-1/2">
              <Image
                src="/icons/search.svg"
                alt="Search"
                width={20}
                height={20}
                className="text-primary h-5 w-5"
              />
            </span>
            {search && (
              <button
                className="absolute top-1/2 right-10 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setSearch("")}
                type="button"
                aria-label="Clear search"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
            {showDropdown && suggestions.length > 0 && (
              <ul className="absolute right-0 left-0 z-20 mt-2 max-h-60 overflow-y-auto rounded-xl border-2 border-gray-200 bg-white shadow-xl">
                {suggestions.map((doc) => (
                  <li
                    key={doc.id}
                    className="cursor-pointer border-b border-gray-100 px-4 py-3 last:border-b-0 hover:bg-gray-50"
                    onMouseDown={() => {
                      setSearch(doc.name);
                      setShowDropdown(false);
                      const slug = createSlug(doc.name);
                      router.push(`/doctor-listing/${slug}`);
                    }}
                  >
                    <div className="font-medium text-gray-900">{doc.name}</div>
                    <div className="mt-0.5 text-xs text-gray-500">
                      {doc.occupation}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            className="relative flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-3 font-medium transition-all hover:bg-gray-50"
            onClick={() => setShowDrawer(true)}
            type="button"
          >
            <Image
              src="/icons/filter.svg"
              alt="Filters"
              width={20}
              height={20}
              className="text-primary h-5 w-5"
            />
            {activeFilterCount > 0 && (
              <span className="bg-primary absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {showDrawer && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm sm:items-center"
            onClick={() => setShowDrawer(false)}
          >
            <div
              className="flex max-h-[90vh] w-full flex-col rounded-t-3xl bg-white shadow-2xl sm:max-w-2xl sm:rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
                <h3 className="text-xl font-bold text-gray-900">
                  Filter Doctors
                </h3>
                <button
                  className="cursor-pointer rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                  onClick={() => setShowDrawer(false)}
                  type="button"
                  aria-label="Close"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-6">
                <FilterSection
                  label="Occupation"
                  options={occupationOptions}
                  selectedValues={filters.occupation}
                  filterKey="occupation"
                />
                <FilterSection
                  label="Experience"
                  options={experienceOptions}
                  selectedValues={filters.experience}
                  filterKey="experience"
                />
                <FilterSection
                  label="Department"
                  options={departmentOptions}
                  selectedValues={filters.department}
                  filterKey="department"
                />
              </div>

              <div className="border-t border-gray-200 px-6 py-4">
                <div className="flex justify-center">
                  <button
                    className="cursor-pointer rounded-xl bg-gray-100 px-8 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-200"
                    onClick={handleReset}
                    type="button"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorSearchBar;
