import React, { useState, useEffect } from "react";
interface Props {
  id: number;
}
interface ProfileInfo {
  id: number;
  username: string;
  name: string;
  age: number;
  aliases: string[];
}
const Profile = ({id}: Props) => {
  const [data, setData] = useState<ProfileInfo>({
    id: 0,
    username: "",
    name: "",
    age: 0,
    aliases: [""],
  });
  useEffect(() => {
    fetch(`/profile/${id}`) // Use the correct URL path use back tick when using variables in path
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
        // Handle the error here, e.g., display an error message to the user
      });
  }, [id]);
  return (
    <div>
      <h1>{data.name}'s Profile</h1>
      <p>Username: {data.username}</p>
      <p>Age: {data.age}</p>
      <p>Aliases: {data.aliases.join(", ")}</p>
    </div>
  );
};

export default Profile;
