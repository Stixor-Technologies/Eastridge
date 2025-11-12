// src/api/blogs.ts
// API utility to fetch blogs and news from Strapi

export async function fetchBlogs() {
  try {
    const response = await fetch(
      "http://localhost:1337/api/blogs?populate=image",
    );

    const data = await response.json();
    // Adjust this if your API response structure is different
    return data;
  } catch (error) {
    return error;
  }
}

export async function fetchNews() {
  try {
    const response = await fetch("http://localhost:1337/api/newss?populate=*");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return { data: [], error };
  }
}
