import UserInfo from "../components/UserInfo";
import { Link } from "react-router-dom";
import PostItem from "../components/PostItem";
import Button from "../ui/Button";
import Loader from "../ui/Loader";
import { fetchPosts } from "../services/postsApi";
import { useQuery } from "@tanstack/react-query";
import ErrorPage from "./ErrorPage";
import { getPosts } from "../features/userSlice";
import { useDispatch } from "react-redux";

function Dashboard() {
  // const { postsPerPage } = useSelector((state) => state.user);
  // const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

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
  // }, []);

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    onSuccess: (posts) => dispatch(getPosts(posts)),
  });

  return (
    <>
      <Button style="mb-10 !px-6 self-end">
        <Link to="/newPost">New Post</Link>
      </Button>
      <UserInfo />
      <div className="flex flex-col gap-5 m-auto lg:px-10 lg:py-8 mt-5">
        <Link
          to="/posts"
          className="self-end text-sky-600 hover:text-sky-700 capitalize text-xl"
        >
          see all
        </Link>
        <ul className="flex flex-wrap  justify-evenly   h-[57rem] overflow-scroll gap-5">
          {isLoading && <Loader />} {/* Show loader only while loading */}
          {isError && <ErrorPage error={error} />}
          {!isLoading &&
            posts.map((item) => (
              <PostItem post={item} key={item.id} styleLi="bg-white/70" />
            ))}
        </ul>
      </div>
    </>
  );
}

export default Dashboard;
