import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userID } = useParams();

  return (
    <div className="bg-orange-400 py-5 text-center text-3xl">
      User: {userID}
    </div>
  );
}

export default User;
