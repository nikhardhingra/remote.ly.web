import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Timeline = ({ activeIndex }) => {
  //const { items } = props;
  const [items, setItems] = useState([
    {
      name: "What is haptics",
      link: "/getting-started/what-is-haptics",
      active: false,
      now: false,
    },
    {
      name: "Identify problem space",
      link: "/getting-started/problem-space",
      active: false,
      now: false,
    },
    {
      name: "Assemble haptics kit",
      link: "/getting-started/haply-development-kit",
      active: false,
      now: false,
    },
    {
      name: "Configure Processing",
      link: "/getting-started/configure-processing",
      active: false,
      now: false,
    },
    {
      name: "Configure Arduino",
      link: "/getting-started/configure-arduino",
      active: false,
      now: false,
    },
  ]);
  useEffect(() => {
    console.log("useeffect");
    setItems(
      items.map((item, index) => {
        if (index < activeIndex) {
          item.active = true;
        } else if (index === activeIndex) {
          item.now = true;
        }

        return item;
      })
    );
    items.map((item, index) => {
      if (index < activeIndex) {
        item.active = true;
      } else if (index === activeIndex) {
        item.now = true;
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
            className={
              "timeline-item" +
              (item.active ? " active" : item.now ? " pink" : "")
            }
            data-content={i + 1}
            to={item.link}
          >
            <div className="timeline-content">{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
