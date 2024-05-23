import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <p>User not logged in</p>;
  return (
    <div>
      User: {user.username} and TestContextApi: {user.testContextApi}
    </div>
  );
}
