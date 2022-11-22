//set cookie
var expires;
export const setCookie = (key, value) => {
        expires = "60";
        document.cookie =  key + "=" + value + expires + "; path=/";
  };
  

  //get cookie
  export const getCookie = (key) => {
      return document.cookie
      .split('; ')
      .find((row) => row.startsWith(key))?.split('=')[1];
  };

  //remove cookie
export const removeCookie = (key) => {
    document.cookie = key + '=; Max-Age=0'
};
  
  
  // //set info to localstorage
  export const setLocalstorage = (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
  };
  
  // //remove from localstorage
  export const removeLocalstorage = (key) => {
      localStorage.removeItem(key);
  };
  
  //authenticate data
  export const authenticate = (data, next) => {
    setCookie("token", data.access_token);
    setLocalstorage("user", data.user);
    next();
  };