const Nav = () => {
  return (
    <>
      <aside className="h-96 border-r mr-4">
        <ul className="space-y-2">
          <li className="flex space-x-2 hover:text-black hover:bg-gray-200 hover:cursor-pointer text-sm rounded-sm p-2 mr-4 text-slate-400 font-semibold">
            <span>
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 100 100"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                {/* <!-- Generator: Sketch 50 (54983) - http://www.bohemiancoding.com/sketch --> */}
                <title>56. Flag</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="56.-Flag"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    transform="translate(7.000000, 2.000000)"
                    stroke="#222F3E"
                    stroke-width="4"
                  >
                    <path d="M7,14 L7,95.5" id="Layer-1"></path>
                    <polyline
                      id="Layer-2"
                      points="7 22 86.9912109 22 72.9912109 49 86.9912109 76 7 76"
                    ></polyline>
                    <circle id="Layer-3" cx="7" cy="7" r="7"></circle>
                    <path d="M2,96 L12,96" id="Layer-4"></path>
                  </g>
                </g>
              </svg>
            </span>
            <span className="pr-3">DUE TODAY</span>
            <div className="flex flex-col justify-center align-center text-xs">
              <aside className="text-center ml-2 text-white font-bold">
                <span className="py-1 px-2 rounded-full bg-red-500">2</span>
              </aside>
            </div>
          </li>
          <li className="flex space-x-2 hover:bg-gray-200 hover:text-black hover:cursor-pointer text-sm rounded-sm p-2 mr-4 text-slate-400 font-semibold">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55.77 15.24H42.65V11.12C42.6474 9.96448 42.1872 8.85703 41.3701 8.03994C40.553 7.22286 39.4455 6.76265 38.29 6.76001H25.71C24.5545 6.76265 23.447 7.22286 22.6299 8.03994C21.8128 8.85703 21.3526 9.96448 21.35 11.12V15.24H8.23C6.84292 15.24 5.51265 15.791 4.53183 16.7718C3.55102 17.7527 3 19.0829 3 20.47V52C3.00265 53.3854 3.55483 54.7131 4.53536 55.6917C5.51589 56.6704 6.84465 57.22 8.23 57.22H55.77C57.1554 57.22 58.4841 56.6704 59.4646 55.6917C60.4452 54.7131 60.9974 53.3854 61 52V20.47C61 19.0829 60.449 17.7527 59.4682 16.7718C58.4874 15.791 57.1571 15.24 55.77 15.24V15.24ZM23.35 11.12C23.35 10.4941 23.5986 9.89382 24.0412 9.45124C24.4838 9.00865 25.0841 8.76001 25.71 8.76001H38.29C38.9159 8.76001 39.5162 9.00865 39.9588 9.45124C40.4014 9.89382 40.65 10.4941 40.65 11.12V15.24H23.35V11.12ZM8.23 17.24H55.77C56.5622 17.2317 57.3297 17.5158 57.9257 18.0379C58.5216 18.56 58.9041 19.2835 59 20.07L47.81 32.24H36.61V29.24C36.61 28.9748 36.5046 28.7204 36.3171 28.5329C36.1296 28.3454 35.8752 28.24 35.61 28.24H28.39C28.1248 28.24 27.8704 28.3454 27.6829 28.5329C27.4954 28.7204 27.39 28.9748 27.39 29.24V32.24H16.19L5 20.07C5.09592 19.2835 5.47842 18.56 6.07434 18.0379C6.67026 17.5158 7.43775 17.2317 8.23 17.24ZM34.61 30.24V37.75H29.39V30.24H34.61ZM55.77 55.24H8.23C7.80499 55.24 7.38415 55.1561 6.99162 54.9932C6.59908 54.8302 6.24257 54.5914 5.9425 54.2904C5.64244 53.9894 5.40473 53.6322 5.24299 53.2392C5.08126 52.8461 4.99868 52.425 5 52V23L15 33.92C15.0944 34.0218 15.2089 34.1028 15.3363 34.1579C15.4637 34.213 15.6012 34.241 15.74 34.24H27.39V38.75C27.39 39.0152 27.4954 39.2696 27.6829 39.4571C27.8704 39.6447 28.1248 39.75 28.39 39.75H35.61C35.8752 39.75 36.1296 39.6447 36.3171 39.4571C36.5046 39.2696 36.61 39.0152 36.61 38.75V34.24H48.25C48.3888 34.241 48.5263 34.213 48.6537 34.1579C48.7811 34.1028 48.8956 34.0218 48.99 33.92L59 23V52C59.0013 52.425 58.9187 52.8461 58.757 53.2392C58.5953 53.6322 58.3576 53.9894 58.0575 54.2904C57.7574 54.5914 57.4009 54.8302 57.0084 54.9932C56.6158 55.1561 56.195 55.24 55.77 55.24V55.24Z"
                  fill="black"
                />
              </svg>
            </span>
            <span>IN PROGRESS</span>
            <div className="flex flex-col justify-center align-center text-xs">
              <aside className="text-center ml-2 text-white font-bold">
                <span className="py-1 px-2 rounded-full bg-red-500">2</span>
              </aside>
            </div>
          </li>
          <li className="flex space-x-2 hover:bg-gray-200 hover:text-black hover:cursor-pointer text-sm rounded-sm p-2 mr-4 text-slate-400 font-semibold">
            <span>
              {/* <!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --> */}
              <svg
                width="21px"
                height="14px"
                viewBox="0 0 21 14"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                {/* <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch --> */}
                <title>playlist_add_check</title>
                <desc>Created with Sketch.</desc>
                <g
                  id="Icons"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Two-Tone"
                    transform="translate(-204.000000, -956.000000)"
                  >
                    <g id="AV" transform="translate(100.000000, 852.000000)">
                      <g
                        id="Two-Tone-/-AV-/-playlist_add_check"
                        transform="translate(102.000000, 98.000000)"
                      >
                        <g>
                          <polygon
                            id="Path"
                            points="0 0 24 0 24 24 0 24"
                          ></polygon>
                          <path
                            d="M2,6 L14,6 L14,8 L2,8 L2,6 Z M2,10 L14,10 L14,12 L2,12 L2,10 Z M2,14 L10,14 L10,16 L2,16 L2,14 Z M16.01,17 L13,14 L11.5,15.5 L16.01,20 L23,13 L21.5,11.5 L16.01,17 Z"
                            id="-Primary-Color"
                            fill="grey"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
            <span className="pr-1">COMPLETED</span>
            <div className="flex flex-col justify-center align-center text-xs">
              <aside className="text-center ml-2 text-white font-bold">
                <span className="py-1 px-2 rounded-full bg-green-400">5</span>
              </aside>
            </div>
          </li>
        </ul>
        <div className="mt-8">
          <button className="px-6 py-2 font-semibold rounded-sm border border-teal-300 hover:bg-teal-300 hover:text-white">
            CREATE TASK
          </button>
        </div>
      </aside>
    </>
  );
};

export default Nav;
