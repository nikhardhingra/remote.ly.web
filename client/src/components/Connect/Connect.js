import React from "react";
import Navbar from "../Navbar";
import Search from "./Search";
import SearchContainer from "./SearchContainer";

export default function Connect() {
  return (
    <>
      <Navbar isAuthenticated={true} />
      <h3 className="text-blue-600 text-3xl">Connect</h3>

      <div className="flex flex-col-reverse justify-center lg:flex-row items-center">
            <p className="mt-2 text-2xl">
            <ol>	Connect with hapticians by searching for users by:
			<li> User name </li>
			<li> Skill </li>
			<li> Experience level (i.e. novice or expert) </li>
			<li> Project category </li>
             <br />
             </ol>
            </p>
      </div>

      <div className="bg-gray-100 p-16 w-full">
        <Search />
      </div>
      <SearchContainer />
    </>
  );
}


 