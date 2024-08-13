// BlogList.jsx
import React from "react";

function BlogList({ blogs, openBlog, deleteBlog }) {
  return (
    <div className="container mt-4">
      <h2>Blog List</h2>
      <ul className="list-group">
        {blogs.map((blog) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={blog.id}
          >
            <span className="cursor-pointer" onClick={() => openBlog(blog.id)}>
              {blog.title}
            </span>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteBlog(blog.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
