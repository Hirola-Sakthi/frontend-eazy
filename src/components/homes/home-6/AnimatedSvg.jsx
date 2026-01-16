import React from "react";

export default function AnimatedIntegrationSVG() {
  return (
    <svg
      width="369"
      height="376"
      viewBox="0 0 369 376"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="aminated-svg"
    >
      <rect
        x="9"
        y="184"
        width="359"
        height="9"
        fill="url(#paint0_linear_15_31)"
      />
      <path
        d="M368 188H344.575C308.348 188 275.082 167.997 258.095 136V136C241.109 104.003 207.842 84 171.616 84L9 84"
        stroke="url(#paint7_linear_15_31)"
        strokeWidth="9"
      />
      <path
        d="M368 160V160C333.014 160 300.938 140.523 284.801 109.481L258.216 58.3379C241.179 25.5638 207.313 5 170.375 5H9"
        stroke="url(#paint9_linear_15_31)"
        strokeWidth="9"
      />
      <path
        d="M368 216V216C333.014 216 300.938 235.477 284.801 266.519L258.216 317.662C241.179 350.436 207.313 371 170.375 371H9"
        stroke="url(#paint11_linear_15_31)"
        strokeWidth="9"
      />
      <path
        d="M368 188H344.575C308.348 188 275.082 208.003 258.095 240V240C241.109 271.997 207.842 292 171.616 292L9 292"
        stroke="url(#paint13_linear_15_31)"
        strokeWidth="9"
      />

      <path
        id="path1-b8eb260"
        className="path"
        d="M366 188L9 188"
        stroke="url(#paint1_linear_15_31)"
        strokeWidth="2"
        strokeDasharray="8 8"
      />
      <path
        id="path2-b8eb260"
        className="path"
        d="M368 188H344.575C308.348 188 275.082 167.997 258.095 136V136C241.109 104.003 207.842 84 171.616 84L9 84"
        stroke="url(#paint8_linear_15_31)"
        strokeWidth="2"
        strokeDasharray="8 8"
      />
      <path
        id="path3-b8eb260"
        className="path"
        d="M368 160V160C333.014 160 300.938 140.523 284.801 109.481L258.216 58.3379C241.179 25.5638 207.313 5 170.375 5H9"
        stroke="url(#paint10_linear_15_31)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="8 8"
      />
      <path
        id="path4-b8eb260"
        className="path"
        d="M368 188H344.575C308.348 188 275.082 208.003 258.095 240V240C241.109 271.997 207.842 292 171.616 292L9 292"
        stroke="url(#paint14_linear_15_31)"
        strokeWidth="2"
        strokeDasharray="8 8"
      />
      <path
        id="path5-b8eb260"
        className="path"
        d="M368 216V216C333.014 216 300.938 235.477 284.801 266.519L258.216 317.662C241.179 350.436 207.313 371 170.375 371H9"
        stroke="url(#paint12_linear_15_31)"
        strokeWidth="2"
        strokeDasharray="8 8"
      />

      {[1, 2, 3, 4, 5].map((i) => (
        <rect key={i} width="32" height="2" rx="1" fill="url(#purpleGradient)" transform="scale(-1,1)" x="-16" y="-2" >
          <animateMotion
            dur={`${6 + i * 0.8}s`}

            begin={`${i * 0.6}s`}  
            repeatCount="indefinite"
            rotate="auto"
            keyPoints="1;0"
            keyTimes="0;1"
          >
            <mpath href={`#path${i}-b8eb260`} />
          </animateMotion>
        </rect>
      ))}

      <defs>
        <linearGradient
          id="paint0_linear_15_31"
          x1="-44.633"
          y1="188.5"
          x2="368"
          y2="188.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F3F3" stopOpacity="0.3" />
          <stop offset="1" stopColor="#F3F3F3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_15_31"
          x1="6.82884"
          y1="186.507"
          x2="366"
          y2="186.507"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D5D7DA" stopOpacity="0.12" />
          <stop offset="1" stopColor="#D5D7DA" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_15_31"
          x1="9"
          y1="136"
          x2="368"
          y2="136"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F3F3" stopOpacity="0.3" />
          <stop offset="1" stopColor="#F3F3F3" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_15_31"
          x1="9"
          y1="136"
          x2="368"
          y2="136"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D5D7DA" stopOpacity="0.12" />
          <stop offset="1" stopColor="#D5D7DA" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_15_31"
          x1="9"
          y1="105"
          x2="368"
          y2="105"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F3F3" stopOpacity="0.3" />
          <stop offset="1" stopColor="#F3F3F3" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_15_31"
          x1="9"
          y1="105"
          x2="368"
          y2="105"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D5D7DA" stopOpacity="0.12" />
          <stop offset="1" stopColor="#D5D7DA" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_15_31"
          x1="9"
          y1="271"
          x2="368"
          y2="271"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F3F3" stopOpacity="0.3" />
          <stop offset="1" stopColor="#F3F3F3" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_15_31"
          x1="9"
          y1="271"
          x2="368"
          y2="271"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D5D7DA" stopOpacity="0.12" />
          <stop offset="1" stopColor="#D5D7DA" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_15_31"
          x1="9"
          y1="240"
          x2="368"
          y2="240"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F3F3" stopOpacity="0.3" />
          <stop offset="1" stopColor="#F3F3F3" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_15_31"
          x1="9"
          y1="240"
          x2="368"
          y2="240"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D5D7DA" stopOpacity="0.12" />
          <stop offset="1" stopColor="#D5D7DA" />
        </linearGradient>
        <linearGradient
          id="purpleGradient"
          x1="0"
          y1="1"
          x2="32"
          y2="1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7A5AF8" stopOpacity="0.3" />
          <stop offset="1" stopColor="#7A5AF8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
