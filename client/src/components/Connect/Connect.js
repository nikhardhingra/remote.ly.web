import React from "react";
import Navbar from "../Navbar";
import Search from "./Search";
import SearchContainer from "./SearchContainer";

export default function Connect() {
  return (
    <>
      <Navbar isAuthenticated={true} />
      <h3 className="text-blue-600 text-3xl">Connect</h3>
       <h3 className="text-3xl text-center lg:text-left text-blue-700"> Connect </h3>
      	<p className="my-6 col-span-4 bg-white border-purple-500 border rounded-lg p-6">
            Connect with hapticians by searching for users by:
            <ol>
			<li> 1. User name </li>
			<li> 2. Skill </li>
			<li> 3. Experience level (i.e. novice or expert) </li>
			<li> 4. Project category </li>
             </ol>
          </p>
     
      <div className="bg-gray-100 p-16 w-full">
        <Search />
      </div>
      <SearchContainer />
    </>
  );
}