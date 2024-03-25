import { UserData } from "./components/Github/Github";

export const githubInfoLoader = async (): Promise<UserData> => {
  try {
    const response = await fetch("https://api.github.com/users/zrital3265");
    return response.json();
  } catch (error) {
    console.log(error);
    return Promise.reject(error); // Ensure a rejected promise is returned
  }
};
