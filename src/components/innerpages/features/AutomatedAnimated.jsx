import React from "react";

const AutomatedAnimated = ({ className = "", style = {} }) => {
  return (
    <svg
      width="1392"
      height="305"
      viewBox="0 -20 1392 305"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", ...style }}
      className={className}
    >
      <path
        id="theLine"
        d="M1392 256.5L1183 256.5C1147.65 256.5 1119 227.846 1119 192.5L1119 65C1119 29.6538 1090.35 0.999987 1055 0.999986L337 0.999959C301.654 0.999958 273 29.6537 273 65L273 192.5C273 227.846 244.346 256.5 209 256.5L0 256.5"
        stroke="#2F3E4E"
        strokeWidth="1.5"
      />

      <circle r="7" fill="#7DEABC" stroke="#717680" strokeWidth="5">
        <animateMotion
          repeatCount="indefinite"
          dur="5s"
          keyPoints="0;1"
          keyTimes="0;1"
        >
          <mpath href="#theLine" />
        </animateMotion>
      </circle>

      <circle r="7" fill="#659DF8" stroke="#717680" strokeWidth="5">
        <animateMotion
          repeatCount="indefinite"
          dur="5s"
          keyPoints="1;0"
          keyTimes="0;1"
        >
          <mpath href="#theLine" />
        </animateMotion>
      </circle>
    </svg>
  );
};

export default AutomatedAnimated;
