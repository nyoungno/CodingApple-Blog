import React from "react";

function BlogList({ blogs, openBlog, deleteBlog }) {
  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {blogs.map((blog) => (
          <li className="listitem" key={blog.id}>
            <span onClick={() => openBlog(blog.id)}>{blog.title}</span>
            <button onClick={() => deleteBlog(blog.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
