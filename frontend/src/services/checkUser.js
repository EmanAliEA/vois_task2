const LOCAL_STORAGE = "user";

function getUsersStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE)) || [];
}
function setUsersStorage(users) {
  localStorage.setItem(LOCAL_STORAGE, JSON.stringify(users));
}

export function getLogin() {
  const users = getUsersStorage();
  return users.find((item) => item.isLogin === true) || {};
}

export function getLogout(user) {
  const users = getUsersStorage();
  const newUsers = users.map((item) =>
    item.email === user.email ? { ...item, isLogin: false } : item
  );
  setUsersStorage(newUsers);
}

function newUser(user) {
  const users = getUsersStorage();
  const isFound = users.find((item) => item.email === user.email);
  if (isFound) return "this email is already logged";
  let newUser = { ...user, isLogin: false };
  setUsersStorage(users ? [...users, newUser] : [newUser]);
  return false;
}

function validKey(searchKey, user, users) {
  const isFound = users?.find((item) => item[searchKey] === user);
  // console.log(isFound);
  if (isFound) return isFound;
  return false;
}

export function checkUser(user, method) {
  // localStorage.removeItem("user");
  if (method) {
    return newUser(user);
  }
  const users = getUsersStorage();
  const validEmail = validKey("email", user.email, users);
  const validPassword = validKey("password", user.password, users);

  let res = { error: {}, user: {} };
  if (!validEmail) res.error.emailError = "Email isn't correct";
  if (!validPassword) res.error.passError = "Password isn't correct";
  if (validEmail && validPassword) res.user = validEmail;
  setUsersStorage(
    users.map((item) =>
      item.email === res.user.email ? { ...item, isLogin: true } : item
    )
  );
  return res;
}
