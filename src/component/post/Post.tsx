"use client";
import { useParams } from "next/navigation";
import blogPost from "@/data/blogPost.json";
import styles from "./Post.module.scss";
interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
}
const PostComponent = () => {
  const { id } = useParams();
  const post: Post | undefined = blogPost.find((post) => post.id === Number(id[0]));
  return (
    <div className={`${styles.post_container}`}>
      <div className={`${styles.post_grid}`}>
        <div className="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
          <div className="m-3">
            <h2 className="text-lg mb-2">
              {post?.title}
              <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">{post?.date}</span>
            </h2>
            <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">{post?.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
