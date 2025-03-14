import React, { useEffect, useState } from "react";
import { Link } from "react-router";

function GitHubPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/0001ashishYadav`).then((response) =>
      response.json().then((data) => {
        console.log(data);
        setData(data);
      })
    );
  }, [data]);

  return (
    <div className="pt-24">
      <div className="h-[60vh] max-w-4xl flex justify-center items-center bg-green-900/10 mx-auto rounded-3xl">
        <div className="w-[50%] h-[100%] flex justify-center items-center text-2xl font-semibold text-red-800">
          <div className="text-center">
            <img className="h-[300px] rounded-full" src={data.avatar_url} />
          </div>
        </div>

        <div className="w-[50%] h-[100%] flex justify-center items-center text-xl font-semibold text-gray-500">
          <div>
            <p className=" text-red-800 text-3xl mb-2">{data.name}</p>

            <p className="text-sm">Followers : {data.followers}</p>
            <p className="w-[70%] mt-7">{data.bio}</p>

            <button className="px-5 py-2 rounded-md bg-red-900 text-sm text-white mt-10">
              <Link to={data.html_url}>See Github Page</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitHubPage;
