import { useNavigate } from "react-router-dom";
import { addPostApi, queryClient } from "../services/postsApi";
import { useMutation } from "@tanstack/react-query";
import PostForm from "../components/PostForm";

function NewPost() {
  // const [newPost, setNewPost] = useState();
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (post) => addPostApi(post),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      alert("success creating new post");
      navigate("/");
    },
  });

  // useEffect(() => {
  //   async function addPost() {
  //     if (newPost) {
  //       const data = await addPostApi({ event: newPost });
  //       console.log(data);
  //       if (data.event) {
  //         setNewPost();
  //         alert("success to create post");
  //         navigate("/");
  //       }
  //       alert(data.message);
  //     }
  //   }
  //   addPost();
  // }, [navigate, newPost]);

  return (
    <>
      <h1 className="capitalize text-2xl sm:text-3xl lg:text-4xl font-bold  text-center text-sky-800">
        add new post
      </h1>
      <PostForm submitFn={mutate} />
    </>
  );
}

export default NewPost;
