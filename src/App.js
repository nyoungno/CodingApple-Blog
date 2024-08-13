import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Blog from "./components/blog.jsx";
import BlogForm from "./components/BlogForm.jsx";
import BlogList from "./components/BlogList.jsx";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null); // 수정: [null] 대신 null

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("blogs"));
    if (savedBlogs) {
      setBlogs(savedBlogs);
    }
  }, []);

  const addBlog = (title, content) => {
    const newBlog = { id: Date.now(), title, content }; // 수정: Date.now()
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  const openBlog = (id) => {
    const blog = blogs.find((blog) => blog.id === id);
    setCurrentBlog(blog);
  };

  const closeBlog = () => {
    setCurrentBlog(null);
  };

  return (
    <div className="App container">
      {currentBlog ? (
        <Blog blog={currentBlog} closeBlog={closeBlog} />
      ) : (
        <>
          <BlogForm addBlog={addBlog} />
          <BlogList
            blogs={blogs}
            openBlog={openBlog}
            deleteBlog={deleteBlog}
          />{" "}
          {/* 수정: prop 이름 "blogs" */}
        </>
      )}
    </div>
  );
}

export default App;
