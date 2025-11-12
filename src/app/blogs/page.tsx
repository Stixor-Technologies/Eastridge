"use client";
import React from "react";
import { BlogsSectionOne } from "../../components/blogs-components/blog-page/BlogsSectionOne";
import { NewsSection } from "../../components/blogs-components/blog-page/newsSection";
import JobOpening from "../../components/blogs-components/blog-page/jobOpening";

const BlogsPage = () => {
  return (
    <div>
      <BlogsSectionOne />
      <NewsSection />
      <JobOpening />
    </div>
  );
};

export default BlogsPage;
