import React, { useState } from "react";

function BlogForm({ addBlog }) {
  const [title, setTitle] = useState(""); // 수정: 일관된 대소문자 사용
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(title, content); // props에서 addBlog 함수 사용
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="titleContainer">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // 수정: 일관된 대소문자 사용
          required
        />
      </div>
      <div className="textAreaContainer">
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Add Blog</button> {/* 수정: 일관된 대소문자 사용 */}
    </form>
  );
}

export default BlogForm;
