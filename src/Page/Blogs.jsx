import { blogsData } from "../data";
import { Link } from "react-router-dom";

const Blogs = () => {
  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <h1>Blogs</h1>
      <section>
        {blogsData.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h3>{title}</h3>
              <p>{truncateString(body, 100)}</p>
              <Link to={title} state={{ id, title, body }}>
                Learn More
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Blogs;
