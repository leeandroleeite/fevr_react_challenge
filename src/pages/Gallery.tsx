import { Container } from "@mui/material";
import React, { useEffect } from "react";
import UserCard from "../components/UserCard";

export const Gallery = (props: any) => {
  const users = props.users;

  useEffect(() => {
    console.log(users);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "99vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <UserCard user={users[0]} />
        <UserCard user={users[1]} />
        <UserCard user={users[2]} />
        <UserCard user={users[3]} />
        <UserCard user={users[4]} />
        <UserCard user={users[5]} />
        <UserCard user={users[6]} />
      </div>
    </div>
  );
};
