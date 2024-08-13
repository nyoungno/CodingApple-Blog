import React from "react";

function Blog({ blog, closeBlog }) {
  return (
    <div className="pt-3 pb-3">
      <h2 className="fw-bolder sub-title">{blog.title}</h2>{" "}
      {/* 블로그 제목 표시 */}
      <p>{blog.content}</p> {/* 블로그 내용 표시 */}
      <div className="back-button">
        <button className="btn btn-primary" onClick={closeBlog}>
          Back to List
        </button>{" "}
      </div>
      {/* 블로그를 닫고 목록으로 돌아가기 */}
    </div>
  );
}

export default Blog;
