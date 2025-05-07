import { QueryClient } from "@tanstack/react-query";

let URL = "http://localhost:3000/events"; // Updated to use json-server's local endpoint
export const queryClient = new QueryClient();

export async function fetchPosts() {
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error("Failed to fetch posts data");
    const data = await response.json();
    console.log("fetch", data);
    return data.events || [];
  } catch (err) {
    console.log(err.message);
    return [];
  }
}
// post->{event}

export async function addPostApi(post) {
  try {
    console.log(post);
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error("Failed to add New Post");
    const data = await response.json();
    console.log("fetch", data);
    return data;
  } catch (err) {
    return err;
  }
}

export function formatDate(date) {
  const newDate = new Date(date);
  return newDate.toDateString().slice(4);
}

export async function getPost(id) {
  try {
    console.log("get post ");
    const response = await fetch(`${URL}/${id}`); // Construct URL with ID
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch post data");
    }
    const data = await response.json();
    return data.event; // Return the specific event
  } catch (error) {
    console.error("Error in getPost:", error.message);
    throw error; // Re-throw the error for the caller to handle
  }
}

//{ ...data, id: post.id }
export async function updatePost({ id, ...post }) {
  console.log("update function ");
  try {
    // console.log(post, id);
    const response = await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ event: post }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update post");
    }
    const data = await response.json();
    return data.event; // Return the updated event
  } catch (error) {
    console.error("Error in updatePost:", error.message);
    throw error; // Re-throw the error for the caller to handle
  }
}
