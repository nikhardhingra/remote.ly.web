import React from "react";
import { Link } from "react-router-dom";

function NewlineText(props) {
  const text = props.children;
  const newText = text.split("\n").map((str) => <p>{str}</p>);

  return newText;
}

const DashboardCard = ({ image, alt, heading, text, link }) => {
  return (
    <Link to={link} class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article class="overflow-hidden rounded-lg shadow-lg">
        <img alt={alt} class="block h-auto w-full" src={image} />

        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 class="text-lg">
            <p class="no-underline hover:underline text-black">{heading}</p>
          </h1>
        </header>
        <main className="p-2 md:p-4">
          <NewlineText>{text}</NewlineText>
        </main>
      </article>
    </Link>
  );
};

export default DashboardCard;
