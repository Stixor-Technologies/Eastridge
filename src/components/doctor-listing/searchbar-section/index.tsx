"use client";
import React, { useState, useMemo, useCallback, useEffect } from "react";
import { createSlug } from "../../../utils/slug";
import { useRouter } from "next/navigation";
// import { doctors, Doctor } from "@/src/core/doctor";
import Image from "next/image";
import { Doctor } from "@/src/core/doctors";

interface FilterState {
  department: string[];
}

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

interface DoctorSearchBarProps {
  onFilter?: (filteredDoctors: Doctor[]) => void;
  doctor: Doctor[];
  FILTERS_KEY: string;
}

const DoctorSearchBar: React.FC<DoctorSearchBarProps> = ({
  onFilter,
  doctor,
  FILTERS_KEY,
}) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  // Main filters state (applied filters)

  const [filters, setFilters] = useState<FilterState>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(FILTERS_KEY);
        if (saved) return JSON.parse(saved);
      } catch {
        // ignore
      }
    }
    return { department: [] };
  });

  // Temp filters for modal (staged changes)
  const [tempFilters, setTempFilters] = useState<FilterState>(filters);

  // Sync tempFilters with filters when modal opens
  useEffect(() => {
    if (showDrawer) {
      setTempFilters(filters);
    }
  }, [showDrawer, filters]);

  // Save filters to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(FILTERS_KEY, JSON.stringify(filters));
    } catch {
      // ignore
    }
  }, [filters, FILTERS_KEY]);

  const departmentOptions = useMemo(
    () => getUniqueValues(doctor, "department"),
    [doctor],
  );

  const filteredDoctors = useMemo(() => {
    return doctor.filter((doc) => {
      const matchesName = doc.name.toLowerCase().includes(search.toLowerCase());
      const matchesDepartment =
        filters.department.length === 0 ||
        filters.department.includes(doc.department);
      return matchesName && matchesDepartment;
    });
  }, [doctor, search, filters]);

  // Call onFilter whenever filteredDoctors changes
  useEffect(() => {
    if (onFilter) {
      onFilter(filteredDoctors);
    }
  }, [filteredDoctors, onFilter]);

  const suggestions = useMemo(() => {
    if (!search && !inputFocused) return [];
    return filteredDoctors;
  }, [search, filteredDoctors, inputFocused]);

  // Change tempFilters only in modal (only department)
  const handleFilterChange = useCallback(
    (key: keyof FilterState, value: string) => {
      setTempFilters((prev) => {
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

  // Reset staged filters and close modal
  const handleReset = useCallback(() => {
    setTempFilters({ department: [] });
    setFilters({ department: [] });
    setShowDrawer(false);
  }, []);

  // Apply staged filters and close modal
  const handleApply = useCallback(() => {
    setFilters(tempFilters);
    setShowDrawer(false);
  }, [tempFilters]);

  // Show count based on staged filters if modal open, else applied filters
  const activeFilterCount = useMemo(() => {
    const f = showDrawer ? tempFilters : filters;
    return f.department.length;
  }, [filters, tempFilters, showDrawer]);

  const handleDoctorSelect = useCallback(
    (doc: Doctor) => {
      setShowDropdown(false);
      setInputFocused(false);
      setSearch("");
      const slug = createSlug(doc.documentId);
      router.push(`/doctor-listing/${slug}`);
    },
    [router],
  );

  const handleClearSearch = useCallback(() => {
    setSearch("");
  }, []);

  // Filter Section Component (only for department)
  const FilterSection = ({
    label,
    options,
    selectedValues,
    filterKey,
  }: {
    label: string;
    options: string[];
    selectedValues: string[];
    filterKey: keyof FilterState;
  }) => (
    <div className="mb-6">
      <label className="mb-3 block text-sm font-semibold text-gray-800">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((value) => {
          const isSelected = selectedValues.includes(value);
          return (
            <label
              key={value}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 text-sm font-medium transition-all duration-200 ${
                isSelected
                  ? "bg-primary/10 text-primary border-black"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-400"
              }`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleFilterChange(filterKey, value)}
                className="h-4 w-4 cursor-pointer rounded border-2 border-gray-300 accent-black focus:ring-2 focus:ring-black focus:ring-offset-0"
              />
              <span className="select-none">{value}</span>
            </label>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="flex w-full justify-center md:px-4 md:py-6">
      <div className="flex w-full max-w-lg flex-col items-center">
        <div className="mb-16 flex flex-row gap-3 md:mb-6">
          {/* Search Input */}
          <div className="relative flex-1">
            <input
              type="text"
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 pr-10 transition-all duration-200 focus:border-black focus:outline-none"
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
            {/* Search icon */}
            <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
              <Image
                src="/icons/search.svg"
                alt="Search"
                width={20}
                height={20}
                className="text-primary h-5 w-5"
              />
            </span>
            {/* Clear button */}
            {search && (
              <button
                className="absolute top-1/2 right-10 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600"
                onClick={handleClearSearch}
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
            {/* Dropdown suggestions */}
            {showDropdown && suggestions.length > 0 && (
              <ul className="absolute right-0 left-0 z-20 mt-2 max-h-60 overflow-y-auto rounded-xl border-2 border-gray-200 bg-white shadow-xl">
                {suggestions.map((doc) => (
                  <li
                    key={doc.id}
                    className="cursor-pointer border-b border-gray-100 px-4 py-3 transition-colors last:border-b-0 hover:bg-gray-50"
                    onMouseDown={() => handleDoctorSelect(doc)}
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

          {/* Filter Button */}
          <button
            className="relative flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-3 py-[6px] font-medium transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 md:px-6 md:py-3"
            onClick={() => setShowDrawer(true)}
            type="button"
            aria-label="Open filters"
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

        {/* Filter Drawer Modal */}
        {showDrawer && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm sm:items-center"
            onClick={() => setShowDrawer(false)}
          >
            <div
              className="flex h-[90vh] w-full flex-col rounded-t-3xl bg-white shadow-2xl sm:max-w-2xl sm:rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
                <h3 className="text-xl font-bold text-gray-900">
                  Filter Doctors
                </h3>
                <button
                  className="cursor-pointer rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
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

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <FilterSection
                  label="Department"
                  options={departmentOptions}
                  selectedValues={tempFilters.department}
                  filterKey="department"
                />
              </div>

              {/* Sticky Footer with Action Buttons */}
              <div className="sticky right-0 bottom-0 left-0 border-t border-gray-200 bg-white px-6 py-4">
                <div className="flex justify-center gap-4">
                  <button
                    className="cursor-pointer rounded-xl bg-gray-100 px-8 py-3 font-semibold text-gray-700 transition-all duration-200"
                    style={{
                      ["&:hover" as any]: {
                        backgroundColor: "#374151",
                        color: "white",
                      },
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#374151";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#f3f4f6";
                      e.currentTarget.style.color = "#374151";
                    }}
                    onClick={handleReset}
                    type="button"
                  >
                    Reset
                  </button>
                  <button
                    className="cursor-pointer rounded-xl bg-gray-100 px-8 py-3 font-semibold text-gray-700 transition-all duration-200"
                    style={{
                      ["&:hover" as any]: {
                        backgroundColor: "#374151",
                        color: "white",
                      },
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#374151";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#f3f4f6";
                      e.currentTarget.style.color = "#374151";
                    }}
                    onClick={handleApply}
                    type="button"
                  >
                    Apply
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
