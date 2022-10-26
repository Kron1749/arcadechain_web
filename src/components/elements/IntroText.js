import React from "react";

function IntroText(props) {
    return             <div className={"max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 text-white " + props.style}>
        <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                    id="d0d83814-78b6-480f-9a5f-7f637616b267"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                  fill="url(#d0d83814-78b6-480f-9a5f-7f637616b267)"
                  width="52"
                  height="24"
              />
            </svg>
            <span className="relative pl-2">{props.leadText[0]}</span>
          </span>{' '} {props.leadText[1]}
        </h1>
        <h2 className="text-base text-gray-600 md:text-lg">
            {props.followText}
        </h2>
    </div>

}

export default IntroText