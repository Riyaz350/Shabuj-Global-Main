import Blog_BlogInbox from "../../Components/Blog/Blog_BlogInbox/Blog_BlogInbox";
import Blogs_Cards from "../../Components/Blog/Blogs_Cards/Blogs_Cards";
import Blogs_Banner from "../../Components/Blog/Blogs_Component/Blogs_Banner";

const Blogs = () => {
  return (
    <div className="font-poppins">
      <Blogs_Banner />
      <Blogs_Cards />
      <Blog_BlogInbox />
    </div>
  );
};

export default Blogs;
