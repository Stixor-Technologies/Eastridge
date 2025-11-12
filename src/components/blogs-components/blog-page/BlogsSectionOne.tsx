import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchBlogs } from "../../../api/APIs";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * Processed blog data for card display (only essential fields)
 */
interface BlogCard {
  id: string | number;
  title: string;
  description?: string;
  image?: {
    id?: number;
    name?: string;
    alternativeText?: string | null;
    url?: string;
    width?: number;
    height?: number;
    formats?: any;
  };
}

// ============================================================================
// BLOG LISTING COMPONENT
// ============================================================================

/**
 * BlogsSectionOne - Main component for displaying blog cards in a grid layout
 *
 * Features:
 * - Fetches all blogs from Strapi API
 * - Displays loading and error states
 * - Renders blogs as clickable cards
 * - Each card links to individual blog detail page
 * - Responsive grid layout
 */
export const BlogsSectionOne = () => {
  // -------------------------------------------------------------------------
  // STATE MANAGEMENT
  // -------------------------------------------------------------------------

  const [blogs, setBlogs] = useState<any[]>([]); // Raw blog data from API
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [showAll, setShowAll] = useState<boolean>(false); // Show more/less state

  // -------------------------------------------------------------------------
  // DATA FETCHING
  // -------------------------------------------------------------------------

  /**
   * Fetch blogs from API on component mount
   */
  useEffect(() => {
    fetchBlogs()
      .then((response: any) => {
        // Extract blog data from Strapi response structure
        setBlogs(response.data || []);
      })
      .catch((err: any) => {
        // Handle API errors
        setError(err.message);
      })
      .finally(() => {
        // Always stop loading regardless of success/failure
        setLoading(false);
      });
  }, []); // Empty dependency array = run only on mount

  // -------------------------------------------------------------------------
  // LOADING & ERROR STATES
  // -------------------------------------------------------------------------

  // Show loading spinner while fetching data
  if (loading) {
    return (
      <section className="container py-16">
        <div className="text-center">
          <div>Loading blogs...</div>
        </div>
      </section>
    );
  }

  // Show error message if API call failed
  if (error) {
    return (
      <section className="container py-16">
        <div className="text-center text-red-600">
          <div>Error loading blogs: {error}</div>
        </div>
      </section>
    );
  }

  // Show message if no blogs are available
  if (!Array.isArray(blogs) || blogs.length === 0) {
    return (
      <section className="container py-16">
        <div className="text-center">
          <div>No blogs available.</div>
        </div>
      </section>
    );
  }

  // -------------------------------------------------------------------------
  // DATA PROCESSING
  // -------------------------------------------------------------------------

  /**
   * Process raw blog data to extract only needed fields for cards
   * This reduces memory usage and improves performance
   */
  const blogCards: BlogCard[] = blogs.map(
    ({ id, title, description, image }) => ({
      id,
      title,
      description,
      image,
    }),
  );

  // Calculate items to show (2 rows = 8 items on xl, 6 on lg, 4 on sm, 2 on mobile)
  const getItemsToShow = () => {
    if (showAll) return blogCards;
    return blogCards.slice(0, 8); // Show 2 rows maximum (4 items per row on xl)
  };

  const displayedBlogs = getItemsToShow();
  const hasMoreItems = blogCards.length > 8;

  // -------------------------------------------------------------------------
  // RENDER BLOG CARDS
  // -------------------------------------------------------------------------

  return (
    <section className="container py-16">
      {/* Section Heading */}
      <div className="mb-12 flex items-center justify-center">
        <h1 className="text-center text-4xl font-bold text-[#333333] md:text-9xl">
          Blogs
        </h1>
      </div>

      {/* Static Featured Section */}
      <div className="mb-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Featured Blog Card */}
          <div className="col-span-2 flex h-auto overflow-hidden rounded-3xl bg-white shadow-lg sm:h-80 lg:h-[362px]">
            {/* Mobile Layout - Image on top, text below */}
            <div className="flex w-full flex-col sm:hidden">
              {/* Mobile Image - Full Width on Top */}
              <div className="w-full">
                <img
                  src="/images/cherry.png"
                  alt="Featured blog image"
                  className="h-48 w-full object-cover"
                />
              </div>
              {/* Mobile Text Section - Below Image */}
              <div className="flex w-full flex-col justify-between bg-[#F6F6F6] p-6">
                <div>
                  <h2 className="mb-4 text-left text-lg leading-[130%] font-medium tracking-[-0.02em] text-gray-800">
                    Porttitor Pharetra, Consectetur Viverra Est Nisl A,
                    Vulputate Id...
                  </h2>
                  <p className="mb-4 text-left text-sm leading-[130%] font-normal tracking-[-0.03em] text-gray-600">
                    Duis massa sapien ornare leo. Sagittis, sollicitudin sed
                    integer maecenas sit. Nibh suspendisse lectus hendrerit
                    pretium...
                  </p>
                </div>
                <p className="text-sm text-gray-500">13 Sept. 2021</p>
              </div>
            </div>

            {/* Desktop Layout - Side by side (640px and above) */}
            <div className="hidden w-full sm:flex">
              {/* Desktop Image Section */}
              <div className="w-1/2">
                <img
                  src="/images/cherry.png"
                  alt="Featured blog image"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Desktop Text Section */}
              <div className="flex w-1/2 flex-col justify-between bg-[#F6F6F6] p-6 lg:p-8">
                <div>
                  <h2 className="mb-4 text-left text-lg leading-[130%] font-medium tracking-[-0.02em] text-gray-800 lg:text-2xl xl:text-3xl">
                    Porttitor Pharetra, Consectetur Viverra Est Nisl A,
                    Vulputate Id...
                  </h2>
                  <p className="mb-4 text-left text-sm leading-[130%] font-normal tracking-[-0.03em] text-gray-600 lg:text-base xl:text-lg">
                    Duis massa sapien ornare leo. Sagittis, sollicitudin sed
                    integer maecenas sit. Nibh suspendisse lectus hendrerit
                    pretium...
                  </p>
                </div>
                <p className="text-sm text-gray-500">13 Sept. 2021</p>
              </div>
            </div>
          </div>

          {/* Shortcut Links Section */}
          <div className="col-span-1 h-auto lg:h-[362px]">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Shortcut Links
            </h3>
            <div className="flex h-full flex-col gap-4 pb-12">
              {/* Shortcut Card 1 */}
              <div className="flex flex-1 cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl">
                {/* Image Section - Always on the left */}
                <div className="w-20 lg:w-24">
                  <img
                    src="/images/design-1.png"
                    alt="Shortcut image 1"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Text Section */}
                <div className="flex flex-1 flex-col justify-between p-4 lg:p-5">
                  <div>
                    <p className="mb-2 text-left text-sm leading-[130%] font-medium tracking-[-0.02em] text-gray-800 lg:text-base">
                      Enim elementum tristique vestibulum et sit. Mattis.
                    </p>
                    <p className="text-xs text-gray-500 lg:text-sm">
                      13 Sept. 2021
                    </p>
                  </div>
                  <p className="text-xs font-medium text-blue-600 lg:text-sm">
                    Hospitality
                  </p>
                </div>
              </div>

              {/* Shortcut Card 2 */}
              <div className="flex flex-1 cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl">
                {/* Image Section - Always on the left */}
                <div className="w-20 lg:w-24">
                  <img
                    src="/images/design-1.png"
                    alt="Shortcut image 2"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Text Section */}
                <div className="flex flex-1 flex-col justify-between p-4 lg:p-5">
                  <div>
                    <p className="mb-2 text-left text-sm leading-[130%] font-medium tracking-[-0.02em] text-gray-800 lg:text-base">
                      Enim elementum tristique vestibulum et sit. Mattis.
                    </p>
                    <p className="text-xs text-gray-500 lg:text-sm">
                      13 Sept. 2021
                    </p>
                  </div>
                  <p className="text-xs font-medium text-blue-600 lg:text-sm">
                    Hospitality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayedBlogs.map((blog) => (
          <BlogCardComponent key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Show More/Less Button */}
      {hasMoreItems && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-accent hover:bg-accent/90 rounded-lg px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:shadow-lg"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

// ============================================================================
// BLOG CARD COMPONENT
// ============================================================================

/**
 * Individual blog card component
 * Separated for better organization and potential reusability
 */
interface BlogCardProps {
  blog: BlogCard;
}

const BlogCardComponent: React.FC<BlogCardProps> = ({ blog }) => {
  // Get image URL from Strapi v5 structure (direct access)
  const imageUrl = blog.image?.url;
  const imageAlt = blog.image?.alternativeText || blog.title;

  // Construct full image URL (assuming Strapi is on localhost:1337)
  const fullImageUrl = imageUrl ? `http://localhost:1337${imageUrl}` : null;

  // Extract text from Strapi rich text blocks structure
  const extractTextFromBlocks = (blocks: any): string => {
    if (!blocks || !Array.isArray(blocks)) return "";

    let text = "";
    blocks.forEach((block: any) => {
      if (block?.children && Array.isArray(block.children)) {
        block.children.forEach((child: any) => {
          if (child?.text) {
            text += child.text + " ";
          }
        });
      }
    });
    return text.trim();
  };

  // Get description text from rich text blocks
  const descriptionText = blog.description
    ? extractTextFromBlocks(blog.description)
    : "";

  // Debug logging (remove in production)
  console.log("Blog image data:", blog.image);
  console.log("Image URL:", imageUrl);
  console.log("Full Image URL:", fullImageUrl);

  return (
    <Link href={`/blogs/${blog.id}`}>
      <div
        className={`flex aspect-[332/469] cursor-pointer flex-col justify-end rounded-3xl p-8 text-inherit no-underline shadow-lg transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl ${
          fullImageUrl
            ? "bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white"
            : "bg-white text-gray-900"
        }`}
        style={
          fullImageUrl
            ? {
                backgroundImage: `url(${fullImageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }
            : {}
        }
      >
        <div className={fullImageUrl ? "relative z-10" : ""}>
          <h2 className="mb-2 text-left text-lg leading-[130%] font-medium tracking-[-0.02em] text-white sm:text-xl lg:text-2xl xl:text-[26px]">
            {blog.title}
          </h2>
          {descriptionText && (
            <p className="line-clamp-3 text-left text-sm leading-[130%] font-normal tracking-[-0.03em] text-white sm:text-base lg:text-lg xl:text-[20px]">
              {descriptionText}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
