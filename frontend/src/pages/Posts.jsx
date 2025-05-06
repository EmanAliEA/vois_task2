import PostItem from "../components/PostItem";
import Loader from "../ui/Loader";
import { fetchPosts } from "../services/postsApi";
import { useQuery } from "@tanstack/react-query";
import ErrorPage from "./ErrorPage";
import Pagination from "../components/pagination";
import { useSelector } from "react-redux";

function Posts() {
  const { numPage } = useSelector((state) => state.user);
  // const [isLoading, setIsLoading] = useState(false);

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  // // console.log(posts);
  // useEffect(() => {
  //   async function fetchData() {
  //     if (!posts.length) {
  //       setIsLoading(true);
  //       const data = await getPostsApi();
  //       dispatch(getPosts(data));
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, [dispatch, posts]);

  return (
    <div className="flex flex-col  text-center  items-center gap-4 ">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-800">
        Latest from the blog
      </h1>
      <p className="  lg:w-2/3 ">
        Stay informed and inspired: discover the freshest blog articles, latest
        updates, and breaking news.
      </p>
      <ul className="w-full lg:w-full flex flex-wrap gap-5 justify-center py-5">
        {isLoading && <Loader />}
        {isError && <ErrorPage error={error} />}
        {!isLoading &&
          posts
            .slice((numPage - 1) * 6, (numPage - 1) * 6 + 6)
            .map((post) => <PostItem post={post} key={post.title} />)}
      </ul>
      {!isLoading && posts.length > 4 && <Pagination />}
    </div>
  );
}

export default Posts;
