import Blog_BlogInbox from "../Blog_BlogInbox/Blog_BlogInbox";
import BlogSingle from "../Blogs_Component/BlogSingle";
import BlogSingle_Banner from "../BlogSingle_Banner/BlogSingle_Banner";
import Latest_Blogs from "../Latest_Blogs";

const Single_Blog = () => {
  return (
    <div className="font-poppins">
      <BlogSingle_Banner />
      <BlogSingle />
      <Blog_BlogInbox />
      <Latest_Blogs />
    </div>
  );
};

export default Single_Blog;
