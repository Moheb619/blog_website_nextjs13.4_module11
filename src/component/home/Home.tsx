import styles from "./Home.module.scss";
import Link from "next/link";
const HomeComponent = () => {
  return (
    <div
      className="hero h-[90vh] bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(https://img.freepik.com/premium-photo/office-dark-leather-table-with-laptop-red-note-book-coffee-copy-space_67155-1849.jpg?w=900)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold capitalize">Welcome to My blog website</h1>
          <Link className="btn btn-info" href="/Blog">
            Go To Blog Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
