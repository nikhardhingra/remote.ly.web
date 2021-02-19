import React, { useEffect } from "react";

export default function RoadMapNavbar() {
  const adjustLine = (from, to, line) => {
    var fT = from.offsetTop + from.offsetHeight / 2;
    var tT = to.offsetTop + to.offsetHeight / 2;
    var fL = from.offsetLeft + from.offsetWidth / 2;
    var tL = to.offsetLeft + to.offsetWidth / 2;

    var CA = Math.abs(tT - fT);
    var CO = Math.abs(tL - fL);
    var H = Math.sqrt(CA * CA + CO * CO);
    var ANG = (180 / Math.PI) * Math.acos(CA / H);

    if (tT > fT) {
      var top = (tT - fT) / 2 + fT;
    } else {
      var top = (fT - tT) / 2 + tT;
    }
    if (tL > fL) {
      var left = (tL - fL) / 2 + fL;
    } else {
      var left = (fL - tL) / 2 + tL;
    }

    if (
      (fT < tT && fL < tL) ||
      (tT < fT && tL < fL) ||
      (fT > tT && fL > tL) ||
      (tT > fT && tL > fL)
    ) {
      ANG *= -1;
    }
    top -= H / 2;

    line.style["-webkit-transform"] = "rotate(" + ANG + "deg)";
    line.style["-moz-transform"] = "rotate(" + ANG + "deg)";
    line.style["-ms-transform"] = "rotate(" + ANG + "deg)";
    line.style["-o-transform"] = "rotate(" + ANG + "deg)";
    line.style["-transform"] = "rotate(" + ANG + "deg)";
    line.style.top = top + "px";
    line.style.left = left + "px";
    line.style.height = H + "px";
  };

  useEffect(() => {
    adjustLine(
      document.getElementById("div1"),
      document.getElementById("div2"),
      document.getElementById("line1")
    );
  }, []);

  return (
    <div>
      <div id="div1" clasName="btns">
        1
      </div>
      <div id="div2" clasName="btns">
        2
      </div>
      <div id="div3" clasName="btns">
        3
      </div>
      <div id="div4" clasName="btns">
        4
      </div>
      <div id="div5" clasName="btns">
        5
      </div>
      <div id="div6" clasName="btns">
        6
      </div>
      <div id="line1" className="absolute w-1 bg-red-500"></div>
      <div id="line2" className="absolute w-1 bg-red-500"></div>
      <div id="line3" className="absolute w-1 bg-red-500"></div>
      <div id="line4" className="absolute w-1 bg-red-500"></div>
      <div id="line5" className="absolute w-1 bg-red-500"></div>
    </div>
  );
}
