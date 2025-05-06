const url = "http://localhost:3000/events ";

export async function signUp(user) {
  try {
    const response = await fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Add Content-Type header
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) throw new Error("failed to create user");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
