import React from "react";
import { useParams } from "react-router";

function UserPage() {
  const { userid } = useParams();
  return (
    <div className="pt-24 ">
      <div className="h-[5vh] max-w-6xl bg-red-800/10 flex justify-center items-center text-red-800 font-bold mx-auto">
        UserPage : {userid}
      </div>
    </div>
  );
}

export default UserPage;
