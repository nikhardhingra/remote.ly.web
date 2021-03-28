import React from "react";
import Navbar from "../Navbar";
import Search from "./Search";
import SearchContainer from "./SearchContainer";

export default function Connect() {
  return (
    <>
      <Navbar isAuthenticated={true} />
    	 <div className="bg-gray-100 p-6 relative">
        {/* <RoadMapNavbar /> */}
        <h3 className="text-blue-600 text-2xl">
          Connect </h3>
        	<p className="mt-2">
         	Connect with hapticians by searching for users by:
            <ol>
			<li> 1. User name </li>
			<li> 2. Skill </li>
			<li> 3. Experience level (i.e. novice or expert) </li>
			<li> 4. Project category </li>
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