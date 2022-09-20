//isLoggedIn=>

export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data != null) return true;
  else return false;
};

//doLogin=> data=>set to localstorage

export const doLogin = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
};

//doLogout=> remove from localStorage

export const doLogout = () => {
  localStorage.removeItem("data");
};

//get currentUser
export const getCurrentUserDetail = () => {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("data")).userDto;
  } else {
    return undefined;
  }
};

export const getToken = () => {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("data")).token;
  } else {
    return null;
  }
};
