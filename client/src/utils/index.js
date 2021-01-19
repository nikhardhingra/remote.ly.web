export const isLogin = () => {
  if (localStorage.getItem("remotelytoken")) return true;
  return false;
};
