import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "../components/Modal";
import PostForm from "../components/PostForm";
import { useNavigate, useParams } from "react-router-dom";
import { getPost, queryClient, updatePost } from "../services/postsApi";
import Loader from "../ui/Loader";
import ErrorPage from "./ErrorPage";
function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });
  const { mutate } = useMutation({
    mutationKey: ["posts", id],
    mutationFn: updatePost,
    onSuccess: () => {
      alert("success to update post");
      queryClient.invalidateQueries(["posts"]);
      navigate("../");
    },
  });
  let content;
  if (isPending) content = <Loader />;
  if (isError) content = <ErrorPage error={error} />;
  if (data) content = <PostForm edit={true} post={data} submitFn={mutate} />;
  return <Modal edit={true}>{content}</Modal>;
}

export default EditPost;
