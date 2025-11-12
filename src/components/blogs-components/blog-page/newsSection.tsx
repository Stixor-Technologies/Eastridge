import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchNews } from "../../../api/APIs";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * News item interface based on the Strapi fields you described
 */
interface NewsItem {
  id: string | number;
  title: string;
  description?: any; // Rich text blocks from Strapi
  date: string;
  authorName: string;
  newsImage?: {
    id?: number;
    name?: string;
    alternativeText?: string | null;
    url?: string;
    width?: number;
    height?: number;
    formats?: any;
  };
  authorImage?: {
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
// NEWS SECTION COMPONENT
// ============================================================================

/**
 * NewsSection - Component for displaying news cards in a vertical layout
 *
 * Features:
 * - Fetches all news from Strapi API
 * - Displays loading and error states
 * - Renders news as horizontal cards with image on left, content on right
 * - Author information displayed below content
 * - Each card links to individual news detail page
 */
export const NewsSection = () => {
  // -------------------------------------------------------------------------
  // STATE MANAGEMENT
  // -------------------------------------------------------------------------

  const [news, setNews] = useState<any[]>([]); // Raw news data from API
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [showAll, setShowAll] = useState<boolean>(false); // Show more/less state

  // -------------------------------------------------------------------------
  // DATA FETCHING
  // -------------------------------------------------------------------------

  /**
   * Fetch news from API on component mount
   */
  useEffect(() => {
    fetchNews()
      .then((response: any) => {
        // Extract news data from Strapi response structure
        setNews(response.data || []);
      })
      .catch((err: any) => {
        // Handle API errors
        setError(err.message || "Unknown error");
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
          <div>Loading news...</div>
        </div>
      </section>
    );
  }

  // Show error message if API call failed
  if (error) {
    return (
      <section className="container py-16">
        <div className="text-center text-red-600">
          <div>Error loading news: {error}</div>
        </div>
      </section>
    );
  }

  // Show message if no news are available
  if (!Array.isArray(news) || news.length === 0) {
    return (
      <section className="container py-16">
        <div className="text-center">
          <div>No news available.</div>
        </div>
      </section>
    );
  }

  // -------------------------------------------------------------------------
  // DATA PROCESSING
  // -------------------------------------------------------------------------

  /**
   * Process raw news data to extract only needed fields for cards
   */
  const newsItems: NewsItem[] = news.map(
    ({ id, title, description, date, authorName, newsImage, authorImage }) => ({
      id,
      title,
      description,
      date,
      authorName,
      newsImage,
      authorImage,
    }),
  );

  // Calculate items to show (3 rows = 6 items on lg, 3 on mobile)
  const getItemsToShow = () => {
    if (showAll) return newsItems;
    return newsItems.slice(0, 6); // Show 3 rows maximum (2 items per row on lg)
  };

  const displayedNews = getItemsToShow();
  const hasMoreItems = newsItems.length > 6;

  // -------------------------------------------------------------------------
  // RENDER NEWS CARDS
  // -------------------------------------------------------------------------

  return (
    <section className="container py-16">
      {/* Section Heading */}
      <div className="mb-12 flex items-center justify-center">
        <h1 className="text-center text-4xl font-bold text-[#333333] md:text-9xl">
          News
        </h1>
      </div>

      {/* News Cards Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {displayedNews.map((newsItem) => (
          <NewsCardComponent key={newsItem.id} newsItem={newsItem} />
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
// NEWS CARD COMPONENT
// ============================================================================

/**
 * Individual news card component
 * Horizontal layout with image on left, content on right
 */
interface NewsCardProps {
  newsItem: NewsItem;
}

const NewsCardComponent: React.FC<NewsCardProps> = ({ newsItem }) => {
  // Get image URLs from Strapi v5 structure
  const newsImageUrl = newsItem.newsImage?.url;
  const authorImageUrl = newsItem.authorImage?.url;
  const newsImageAlt = newsItem.newsImage?.alternativeText || newsItem.title;
  const authorImageAlt =
    newsItem.authorImage?.alternativeText || newsItem.authorName;

  // Construct full image URLs (assuming Strapi is on localhost:1337)
  const fullNewsImageUrl = newsImageUrl
    ? `http://localhost:1337${newsImageUrl}`
    : null;
  const fullAuthorImageUrl = authorImageUrl
    ? `http://localhost:1337${authorImageUrl}`
    : null;

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
  const descriptionText = newsItem.description
    ? extractTextFromBlocks(newsItem.description)
    : "";

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Link href={`/news/${newsItem.id}`}>
      <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl">
        {/* Mobile Layout - Vertical */}
        <div className="flex flex-col lg:hidden">
          {/* News Image - Top on Mobile */}
          <div className="relative h-48 w-full flex-shrink-0">
            <div className="h-full w-full overflow-hidden rounded-t-lg">
              {fullNewsImageUrl ? (
                <img
                  src={fullNewsImageUrl}
                  alt={newsImageAlt}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-200">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
            </div>
          </div>

          {/* Content - Bottom on Mobile */}
          <div className="flex flex-col justify-between p-4">
            {/* Title and Description */}
            <div className="mb-4">
              <h3 className="mb-3 line-clamp-2 text-xl font-bold text-black">
                {newsItem.title}
              </h3>
              {descriptionText && (
                <p
                  className="line-clamp-3 text-base leading-relaxed"
                  style={{ color: "#3E3232BF" }}
                >
                  {descriptionText}
                </p>
              )}
            </div>

            {/* Author Section */}
            <div
              className="flex items-center space-x-3 rounded-lg p-3"
              style={{ backgroundColor: "#F5F5F5" }}
            >
              {/* Author Image */}
              <div className="h-10 w-10 flex-shrink-0">
                {fullAuthorImageUrl ? (
                  <img
                    src={fullAuthorImageUrl}
                    alt={authorImageAlt}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
                    <span className="text-sm text-gray-600">
                      {newsItem.authorName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              {/* Author Name and Date */}
              <div className="flex-1">
                <p className="font-medium text-black">{newsItem.authorName}</p>
                <p className="text-sm" style={{ color: "#3E3232BF" }}>
                  {formatDate(newsItem.date)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden lg:flex">
          {/* News Image - Left Side */}
          <div className="relative w-1/3 flex-shrink-0 p-4">
            <div className="h-full w-full overflow-hidden rounded-lg">
              {fullNewsImageUrl ? (
                <img
                  src={fullNewsImageUrl}
                  alt={newsImageAlt}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-200">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="flex w-2/3 flex-col justify-between p-4">
            {/* Title and Description */}
            <div className="mb-4">
              <h3 className="mb-3 line-clamp-2 text-xl font-bold text-black">
                {newsItem.title}
              </h3>
              {descriptionText && (
                <p
                  className="line-clamp-3 text-base leading-relaxed"
                  style={{ color: "#3E3232BF" }}
                >
                  {descriptionText}
                </p>
              )}
            </div>

            {/* Author Section */}
            <div
              className="flex items-center space-x-3 rounded-lg p-3"
              style={{ backgroundColor: "#F5F5F5" }}
            >
              {/* Author Image */}
              <div className="h-10 w-10 flex-shrink-0">
                {fullAuthorImageUrl ? (
                  <img
                    src={fullAuthorImageUrl}
                    alt={authorImageAlt}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
                    <span className="text-sm text-gray-600">
                      {newsItem.authorName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              {/* Author Name and Date */}
              <div className="flex-1">
                <p className="font-medium text-black">{newsItem.authorName}</p>
                <p className="text-sm" style={{ color: "#3E3232BF" }}>
                  {formatDate(newsItem.date)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsSection;
