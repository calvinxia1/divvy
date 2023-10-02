import React, { useState, useEffect } from "react";
interface ProfileInfo {
  id: number;
  username: string;
  name: string;
  age: number;
  aliases: string[];
}
const Profile = () => {
  const [data, setData] = useState<ProfileInfo>({
    id: 0,
    username: "",
    name: "",
    age: 0,
    aliases: [""],
  });
  const username = "rryang"
  useEffect(() => {
    fetch(`/profiles/${username}`) // Use the correct URL path
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((profileData) => setData(profileData))
      .catch((error) => {
        console.error("Error fetching data: ", error);
        // Handle the error here, e.g., display an error message to the user
      });
  }, []);
  return (
    <div>
      <h1>{data.username}'s Profile</h1>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>Aliases: {data.aliases.join(", ")}</p>
    </div>
  );
};

export default Profile;
