import Link from "next/link";
import blogPost from "@/data/blogPost.json";
import styles from "./Blog.module.scss";
const BlogComponent = () => {
  return (
    <div className={`${styles.blog_container}`}>
      <h1 className={`${styles.blog_heading}`}>Blogs</h1>
      <div className="flex flex-row flex-wrap justify-center">
        {blogPost.map((post) => (
          <div key={post.id} className="card w-96 bg-base-100 shadow-xl m-5">
            <div className="card-body flex items-center justify-center">
              <h2 className="card-title">{post.title}</h2>
              <div className="card-actions justify-end">
                <Link className="btn btn-outline" href={`Post/${post.id}`}>
                  See Post
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
