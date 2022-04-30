import React, { useEffect } from "react";
import UserCard from "../components/UserCard";

export const Gallery = (props: any) => {
  const users = props.users;

  useEffect(() => {
    console.log(users);
  }, []);

  return (
    <div style={{ display: "flex", maxWidth: "100vw" }}>
      <UserCard user={users[0]} />
      <UserCard user={users[1]} />
      <UserCard user={users[2]} />
      <UserCard user={users[3]} />
      <UserCard user={users[4]} />
      <UserCard user={users[5]} />
      <UserCard user={users[6]} />
      <UserCard user={users[7]} />
      <UserCard user={users[8]} />
      <UserCard user={users[9]} />
    </div>
  );
};
