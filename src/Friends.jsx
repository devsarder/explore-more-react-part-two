import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div
      style={{
        border: "2px solid tomato",
        borderRadius: "15px",
        padding: "20px",
      }}
    >
      <p>Friends:{friends.length}</p>
      {
        // eslint-disable-next-line react/jsx-key
        friends.map((friend) => <Friend friend ={friend}></Friend>)
      }
    </div>
  );
}
