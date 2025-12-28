import { Link } from "react-router-dom";
import blogsData from "./blogsData";
import "./Blogs.css";

const Blogs = () => {
  return (
    <section className="blogs-page">
      <div className="blogs-wrapper">
        <h1 className="page-title">Our Blogs</h1>
        <p className="page-subtitle">
          Read our latest articles, insights, and updates
        </p>

        <div className="blogs-grid">
          {blogsData.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <img src={blog.image} alt={blog.title} />

              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.shortDesc}</p>

                <Link to={`/blogs/${blog.id}`} className="read-more">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
