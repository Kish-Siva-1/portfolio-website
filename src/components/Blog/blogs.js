import React, { useEffect, useState } from "react";
import { BlogCard } from "./blogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kishandth.sivapalasundaram"
    )
      .then(resp => resp.json())
      .then(blogData => {
        setBlogs(
          blogData["items"].filter(blog => blog.thumbnail.endsWith(".png"))
        );
      });
  }, []);

  const generateBlogs = () => {
    return blogs.map(blog => <BlogCard key={blog.guid} {...blog} />);
  };

  return (
    <section className="page-section bg-primary text-white mb-0" id="blogs">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">
          Blog
        </h2>

        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeIcon icon={faPen} />
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="card-deck">{generateBlogs()}</div>
        <p className="text-center">
          <a href="https://medium.com/@kishandth.sivapalasundaram" target="_blank" className="btn btn-primary btn-lg">More Blogs</a>
        </p>
      </div>
    </section>
  );
};