import { useParams, Link } from "react-router-dom";
import blogsData from "./blogsData";
import "./Blogs.css";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogsData.find((item) => item.id === id);

  if (!blog) {
    return <h2 style={{ textAlign: "center" }}>Blog not found</h2>;
  }

  return (
    <section className="blog-details">
      <div className="blog-details-wrapper">
        <img src={blog.image} alt={blog.title} />
        <h1>{blog.title}</h1>
        <p className="long-desc">{blog.longDesc}</p>

        <Link to="/blogs" className="back-btn">
          ← Back to Blogs
        </Link>
      </div>
    </section>
  );
};

export default BlogDetails;
