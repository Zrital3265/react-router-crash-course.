import React, { useEffect, useState } from "react";

interface UserData {
  followers: number;
  avatar_url: string;
}

const Github: React.FC = () => {
  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/zrital3265")
      .then((response) => response.json())
      .then((userData: UserData) => {
        console.log(userData);
        setData(userData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="p-3 m-4 text-2xl text-center text-gray-700 bg-orange-100 ">
      {/* conditional rendering */}
      {data && (
        <>
          <img
            src={data.avatar_url}
            alt="Github Avatar"
            width={200}
            className="mx-auto"
          />
          <p> Github Followers: {data.followers}</p>
        </>
      )}
      {!data && <p>Loading...</p>}
    </div>
  );
};
export default Github;
