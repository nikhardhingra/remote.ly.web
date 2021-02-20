import React from "react";
import Navbar from "../Navbar";
import Search from "./Search";
import SearchContainer from "./SearchContainer";

export default function Connect() {
  return (
    <>
      <Navbar isAuthenticated={true} />
      <div className="bg-gray-100 p-16 w-full">
        <Search />
      </div>
      <SearchContainer />
    </>
  );
}
