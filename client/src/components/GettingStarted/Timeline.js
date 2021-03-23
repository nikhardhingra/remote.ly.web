import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Timeline = ({ activeIndex }) => {
  //const { items } = props;
  const [items, setItems] = useState([
    {
      name: "What is Haptics?",
      link: "/getting-started/what-is-haptics",
      active: false,
      isLink: true,
    },
    {
      name: "Identify Problem Space",
      link: "/getting-started/problem-space",
      active: false,
      isLink: false,
    },
    {
      name: "Assemble Haptics Kit",
      link: "/getting-started/haply-development-kit",
      active: false,
      isLink: false,
    },
    {
      name: "Processing",
      link: "/getting-started/configure-processing",
      active: false,
      isLink: false,
    },
    {
      name: "Arduino",
      link: "/getting-started/configure-arduino",
      active: false,
      isLink: false,
    },
  ]);
  useEffect(() => {
    console.log("useeffect");
    setItems(
      items.map((item, index) => {
        if (index <= activeIndex) {
          item.active = true;
        }
        if (index <= activeIndex + 1) {
          item.isLink = true;
        }
        return item;
      })
    );
    items.map((item, index) => {
      if (index <= activeIndex) {
        item.active = true;
      }
      console.log(item);
    });
  }, []);
  const totalItems = items.length;
  const numberOfActiveItems = items.filter((item) => item.active).length;
  const progressBarWidth =
    totalItems > 1 ? ((numberOfActiveItems - 1) / (totalItems - 1)) * 100 : 0;
  console.log(items);

  return (
    <div className="timeline">
      <div
        className="timeline-progress"
        style={{ width: `${progressBarWidth}%` }}
      ></div>
      <div className="timeline-items">
        {items.map((item, i) => (
          <Link
            key={i}
            className={"timeline-item" + (item.active ? " active" : "")}
            data-content={i + 1}
            to={item.isLink ? item.link : "#"}
          >
            <div className="timeline-content">{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
