import UserCard from "../components/UserCard";

export const Gallery = (props: any) => {
  const users = props.users;

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
          justifyContent: "space-around",
        }}
      >
        {users.map((user: any) => {
          <UserCard user={user} />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <UserCard user={users[0]} />
        <UserCard user={users[1]} />
        <UserCard user={users[2]} />
        <UserCard user={users[3]} />
        <UserCard user={users[4]} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <UserCard user={users[5]} />
        <UserCard user={users[6]} />
        <UserCard user={users[7]} />
        <UserCard user={users[8]} />
        <UserCard user={users[9]} />
      </div>
    </div>
  );
};
