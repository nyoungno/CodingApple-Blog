// BlogForm.jsx
import React, { useState } from "react";

function BlogForm({ addBlog }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div className="pt-3 pb-3">
      <h2 className="fw-bolder Form-title">React Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label fw-bolder">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label fw-bolder">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="add-button">
          <button type="submit" className="btn btn-primary">
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
}

export default BlogForm;
