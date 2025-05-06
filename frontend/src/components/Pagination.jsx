import { changePage } from "../features/userSlice";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";

function Pagination() {
  const { numPage, posts } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handlePage(index) {
    dispatch(changePage(index));
  }

  const totalPages = Math.ceil(posts.length / 6); // Calculate total pages dynamically

  return (
    <div className="space-x-1 flex justify-center">
      {posts.length > 0 &&
        Array.from({ length: totalPages }).map((_, index) => (
          <Button
            key={index}
            onClick={() => handlePage(index)}
            style={`${index + 1 === numPage ? "!bg-sky-800" : ""} !px-3`}
          >
            {index + 1}
          </Button>
        ))}
    </div>
  );
}

export default Pagination;
