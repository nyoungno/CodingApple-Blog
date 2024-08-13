import React from "react";

function Blog({ blog, closeBlog }) {
  return (
    <div className="container mt-4">
      <h2>{blog.title}</h2> {/* 블로그 제목 표시 */}
      <p>{blog.content}</p> {/* 블로그 내용 표시 */}
      <button className="btn btn-primary" onClick={closeBlog}>
        Back to List
      </button>{" "}
      {/* 블로그를 닫고 목록으로 돌아가기 */}
    </div>
  );
}

export default Blog;
