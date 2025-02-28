import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "./BlogSection"; // Import blog data
import "./SingleBlog.css"; // Import styles

const SingleBlog = () => {
  const { id } = useParams(); // Get blog ID from URL
  const blog = blogs.find((b) => b.id === parseInt(id)); // Find blog by ID

  if (!blog) {
    return <h2>Blog Not Found</h2>;
  }

  return (
    <div className="single-blog-container">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.Description}</p>
    </div>
  );
};

export default SingleBlog;
