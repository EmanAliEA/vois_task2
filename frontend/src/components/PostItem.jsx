import PostHeader from "./PostHeader";
import TagItem from "./TagItem";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

// post -> title , id, content, author,date ,image ,tags ,
function PostItem({ post, styleLi = "" }) {
  const style = "flex flex-col gap-3";

  return (
    <>
      {
        <li
          className={`w-full group sm:w-[47.7%] lg:w-[30%] text-left  text-black shadow-sm shadow-sky-800  rounded-t-xl item ${style} ${styleLi}`}
        >
          <div className="relative h-52 w-full overflow-hidden rounded-t-xl">
            <div className="absolute z-10 flex gap-[.19rem] lg:gap-1 top-3 right-4">
              {post.tags.map((tag) => (
                <TagItem key={tag} text={tag} />
              ))}
            </div>
            <img
              src={post.image}
              alt={post.title}
              className="h-full group-hover:scale-125 hover:scale-125 duration-[.5s] transition-all  w-full  cursor-pointer"
            />
          </div>
          <div className={`p-3 ${style}`}>
            <PostHeader author={post.author} date={post.date} />
            <h2 className="font-bold text-[1rem] lg:text-xl cursor-pointer hover:text-sky-600">
              {post.title}
            </h2>
            <p className="text-gray-500 h-25 sm:h-20  overflow-hidden lg:leading-7">
              {post.content}
            </p>
            <div className="flex justify-between">
              <a className="after:w-0 hover:after:w-full after:transition-all after:duration-[.8s] w-fit after:h-0.5  after:bg-sky-600 after:absolute after:bottom-0 after:left-0 relative hover:text-sky-600 transition-all cursor-pointer">
                Read more
              </a>
              {/* <Button style="!px-3 !text-[1rem]">
                <Link to={`/${post.id}/editPost`}>Edit</Link>
              </Button> */}
            </div>
          </div>
        </li>
      }
    </>
  );
}

export default PostItem;
