import React, { useEffect, useState } from "react";
import { fetchBlogs } from "../../../api/APIs";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * Blog data structure from Strapi API
 */
interface Blog {
  id: string | number;
  title: string;
  body?: any; // Strapi rich text content (array of sections)
  content?: string; // Simple text content (alternative field)
}

// ============================================================================
// BLOG DETAIL COMPONENT
// ============================================================================

/**
 * BlogDetail - Component for displaying individual blog content
 *
 * Features:
 * - Fetches single blog by ID from all blogs
 * - Handles complex Strapi rich text content
 * - Fallback for different content field structures
 * - Responsive typography and spacing
 */
export const BlogDetail = ({ id }: { id: string | number }) => {
  // -------------------------------------------------------------------------
  // STATE MANAGEMENT
  // -------------------------------------------------------------------------

  const [blog, setBlog] = useState<Blog | null>(null); // Single blog data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // -------------------------------------------------------------------------
  // DATA FETCHING
  // -------------------------------------------------------------------------

  /**
   * Fetch blog data and find the specific blog by ID
   */
  useEffect(() => {
    fetchBlogs()
      .then((response: { data: Blog[] }) => {
        // Find the blog with matching ID
        const foundBlog = (response.data || []).find(
          (b: Blog) => String(b.id) === String(id),
        );
        setBlog(foundBlog || null);
      })
      .catch((err: any) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]); // Re-run if blog ID changes

  // -------------------------------------------------------------------------
  // LOADING & ERROR STATES
  // -------------------------------------------------------------------------

  if (loading) {
    return <div className="p-8 text-center">Loading blog...</div>;
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-600">
        Error loading blog: {error}
      </div>
    );
  }

  if (!blog) {
    return <div className="p-8 text-center">Blog not found.</div>;
  }

  // -------------------------------------------------------------------------
  // RENDER BLOG CONTENT
  // -------------------------------------------------------------------------

  return (
    <article>
      {/* Blog Title */}
      <h1 className="mb-6 text-3xl leading-tight font-bold">
        {blog.title || "Untitled"}
      </h1>

      {/* Blog Content */}
      <div className="text-base leading-relaxed">
        <BlogContent content={blog} />
      </div>
    </article>
  );
};

// ============================================================================
// BLOG CONTENT RENDERER
// ============================================================================

/**
 * BlogContent - Handles different content structures from Strapi
 * Separated for better organization and easier maintenance
 */
interface BlogContentProps {
  content: Blog;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  // Handle simple text content field
  if (content.content) {
    return <p className="mb-4">{content.content}</p>;
  }

  // Handle complex Strapi rich text body field
  if (content.body) {
    return <StrapiRichTextRenderer body={content.body} />;
  }

  // Fallback for no content
  return <p className="text-gray-600">No content available.</p>;
};

// ============================================================================
// STRAPI RICH TEXT RENDERER
// ============================================================================

/**
 * StrapiRichTextRenderer - Handles Strapi's rich text format
 * Strapi stores rich text as an array of sections with nested children
 */
interface StrapiRichTextRendererProps {
  body: any;
}

const StrapiRichTextRenderer: React.FC<StrapiRichTextRendererProps> = ({
  body,
}) => {
  // Handle array structure (typical Strapi rich text)
  if (Array.isArray(body)) {
    return (
      <>
        {body.map((section: any, sectionIndex: number) => (
          <StrapiSection
            key={sectionIndex}
            section={section}
            sectionIndex={sectionIndex}
          />
        ))}
      </>
    );
  }

  // Handle simple string
  if (typeof body === "string") {
    return <p className="mb-4">{body}</p>;
  }

  // Debug view for unknown structures
  return (
    <div className="mt-4">
      <p className="mb-2 text-gray-600">Debug - Content structure:</p>
      <pre className="max-w-full overflow-auto rounded bg-gray-100 p-4 text-sm">
        {JSON.stringify(body, null, 2)}
      </pre>
    </div>
  );
};

// ============================================================================
// STRAPI SECTION RENDERER
// ============================================================================

/**
 * Renders individual sections within Strapi rich text
 */
interface StrapiSectionProps {
  section: any;
  sectionIndex: number;
}

const StrapiSection: React.FC<StrapiSectionProps> = ({
  section,
  sectionIndex,
}) => {
  // Handle section with children (paragraphs, text blocks)
  if (section.children && Array.isArray(section.children)) {
    return (
      <>
        {section.children.map((child: any, childIndex: number) => (
          <p key={`${sectionIndex}-${childIndex}`} className="mb-4">
            {child.text || ""}
          </p>
        ))}
      </>
    );
  }

  // Handle section with direct text
  if (section.text) {
    return (
      <p key={sectionIndex} className="mb-4">
        {section.text}
      </p>
    );
  }

  // Skip empty or unknown sections
  return null;
};
