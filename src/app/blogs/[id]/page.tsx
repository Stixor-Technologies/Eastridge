"use client";
import React from "react";
import { BlogDetail } from "../../../components/blogs-components/blog-detail/BlogDetail";

interface BlogDetailPageProps {
  params: { id: string };
}

const BlogDetailPage = ({ params }: BlogDetailPageProps) => {
  return (
    <div style={{ padding: "2rem" }}>
      <BlogDetail id={params.id} />
    </div>
  );
};

export default BlogDetailPage;
