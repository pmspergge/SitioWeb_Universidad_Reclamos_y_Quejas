import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { setAuth } = useAuth();
  const lagout = async () => {
    setAuth({});
    try {
      const response = await axios("/logout", {
        withCredentials: true,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return lagout;
};

export default useLogout;
