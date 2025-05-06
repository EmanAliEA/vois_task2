import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Input from "../ui/Input";
function PostForm({ edit = false, submitFn, post = "" }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.tags = data.tags.trim().split(",");
    submitFn(post ? { ...data, id: post.id } : { event: data });
    // mutate({ event: data });
    // setNewPost(data);
    // dispatch(addNewPost(data));
    // navigate("/");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto border mt-3 text-sky-700  bg-white font-semibold w-3/4 lg:w-1/2  flex gap-2 md:gap-3 flex-wrap  md:flex-col border-white  p-4 md:p-6 md:pb-8 rounded-2xl shadow-xl shadow-sky-900"
    >
      <Input defaultValue={post.title} check={true} name="title">
        Title
      </Input>
      <Input defaultValue={post.author} check={true} name="author">
        Author
      </Input>
      <Input defaultValue={post.image} check={true} name="image">
        Image
      </Input>
      <Input defaultValue={post.date} type="date" check={true} name="date">
        Date
      </Input>
      <Input
        defaultValue={post.tags}
        check={true}
        name="tags"
        placeholder="Please write tags with comma"
      >
        Tags
      </Input>
      {/* <Input check={true} name="content">
    Content
  </Input> */}
      <textarea
        name="content"
        defaultValue={post.content}
        id=""
        rows={3}
        placeholder="Content"
        className="resize-none text-gray-500 rounded-[.2rem] border-gray-300 border-1 shadow shadow-sky-900/40 p-1 outline-none"
      ></textarea>
      <div className="flex gap-2 self-end">
        <Button style="!text-[1rem] !px-6 !self-end !sm:self-end !md:self-end ">
          {edit ? "Edit" : "Add Post"}
        </Button>
        <Button style="!text-[1rem] !px-6 !self-end !sm:self-end !md:self-end ">
          <Link to="/">Cancel</Link>
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
