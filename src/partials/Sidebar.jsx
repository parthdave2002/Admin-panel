import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate  } from "react-router-dom";
import SidebarLinkGroup from "./SidebarLinkGroup";
import logo from "../images/logo.svg";
import down_arrow from "../images/down-arrow.svg";
import icon_1 from "../images/timer-icon.svg";

function Sidebar({ sidebarOpen, setSidebarOpen, variant = 'default'}) {

  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const trigger = useRef(null);
  const sidebar = useRef(null);
  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === "true");

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);


  const data =  [
     {
    "id": 1,
    "name": "Geospatial Solutions",
    "subarray": [
        {
            "id": 1,
            "name": "Agriculture Platform",
            "route" : "/agriculture-platform"
        },
        {
            "id": 2,
            "name": "Infrastructure  ",
            "route" : "/infrastructure"
        },
        {
            "id": 3,
            "name": "Urban Mobility ",
            "route" : "/urban-mobility"
        },
        {
            "id": 4,
            "name": "Suitable place ",
            "route" : "/suitable-place"
        }
    ]
    },
    {
        "id": 2,
        "name": "Cybersecurity ",
        "subarray": [
            {
                "id": 1,
                "name": "Website Detection"
            },
            {
                "id": 2,
                "name": "Mobile App Scanner"
            },
            {
                "id": 3,
                "name": "Real-Time  Scanning"
            }
        ]
    },
    {
        "id": 3,
        "name": "Generative AI",
        "subarray": [
            {
                "id": 1,
                "name": "Content Creation"
            },
            {
                "id": 2,
                "name": "Design Solutions"
            }
        ]
    },
    {
        "id": 4,
        "name": "Climate Change",
        "subarray": [
            {
                "id": 1,
                "name": "Monitoring Systems"
            },
            {
                "id": 2,
                "name": "Mitigation Technologies"
            },
            {
                "id": 3,
                "name": "Adaptation Tools"
            }
        ]
    },
    {
        "id": 5,
        "name": "AI and Machine",
        "subarray": [
            {
                "id": 1,
                "name": "Predictive Analytics"
            },
            {
                "id": 2,
                "name": "Anomaly Detection"
            },
            {
                "id": 3,
                "name": "Automated Decision-Making"
            }
        ]
    }
  ]

  return (
    <div className="min-w-fit">
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${ sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none" }`}  aria-hidden="true"></div>
      <div  id="sidebar"  ref={sidebar} className={`flex lg:!flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-[18rem] 2xl:!w-64 shrink-0 bg-white dark:bg-gray-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} ${variant === 'v2' ? 'border-r border-gray-200 dark:border-gray-700/60' : 'rounded-r-2xl shadow-sm'}`} >
       
        {/* Sidebar header */}
        <div className="flex justify-between mb-8 pr-3 sm:px-2">
          <button  ref={trigger}  className="lg:hidden text-gray-500 hover:text-gray-400" onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls="sidebar"  aria-expanded={sidebarOpen}  >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />  </svg>
          </button>

          {/* Logo */}
          <NavLink end to="/" className="block">
              {sidebarExpanded ? 
                  <img src={logo}  className="h-[3rem] w-[6rem]  lg:h-[5rem] lg:w-[15rem]" />
              : 
                  <svg className="fill-violet-500" xmlns="http://www.w3.org/2000/svg" width={32} height={32}>
                    <path d="M31.956 14.8C31.372 6.92 25.08.628 17.2.044V5.76a9.04 9.04 0 0 0 9.04 9.04h5.716ZM14.8 26.24v5.716C6.92 31.372.63 25.08.044 17.2H5.76a9.04 9.04 0 0 1 9.04 9.04Zm11.44-9.04h5.716c-.584 7.88-6.876 14.172-14.756 14.756V26.24a9.04 9.04 0 0 1 9.04-9.04ZM.044 14.8C.63 6.92 6.92.628 14.8.044V5.76a9.04 9.04 0 0 1-9.04 9.04H.044Z" />
                  </svg>
              }
          </NavLink>
        </div>

        <div className="space-y-8">
            <ul className="mt-3">
                  {data && data.map((item, k) =>{
                    return(
                        <SidebarLinkGroup>
                          {(handleClick, open) => {
                            return (
                              <React.Fragment>
                                <a  href="#0"
                                  className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${  pathname === "/" || pathname.includes("dashboard") ? "" : "hover:text-gray-900 dark:hover:text-white"  }`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleClick();
                                    setSidebarExpanded(true);
                                  }}
                                >
                                  <div className="flex items-center justify-between">
                                      <div className="flex items-center">
                                        <img className={`shrink-0 fill-current`} src={icon_1} />                       
                                        <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">  {item.name} </span>
                                      </div>
                                   
                                    <div className="flex shrink-0 ml-2">
                                      <img className={`w-3 h-3 shrink-0 ml-1  text-gray-400 dark:text-gray-500 ${open && "rotate-180"}`} src={down_arrow} />                       
                                    </div>
                                  </div>
                                </a>
                                <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                  <ul className={`pl-8 mt-1 ${!open && "hidden"}`}>
                                        {item && item.subarray.map((data, r) =>{
                                        return(
                                          <div key={data.id} className="p-1  text-grey-100 mb-3 cursor-pointer dark:hover:text-gray-50"  onClick={() => { if (data.route) { navigate(data.route);  }}}>
                                             {data.name}
                                          </div> 
                                        )})}
                                  </ul>
                                </div>
                              </React.Fragment>
                            );
                          }}
                        </SidebarLinkGroup>
                    )
                  })}
            </ul>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="w-12 pl-4 pr-3 py-2">
            <button className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400" onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="shrink-0 fill-current text-gray-400 dark:text-gray-500 sidebar-expanded:rotate-180" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path d="M15 16a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1ZM8.586 7H1a1 1 0 1 0 0 2h7.586l-2.793 2.793a1 1 0 1 0 1.414 1.414l4.5-4.5A.997.997 0 0 0 12 8.01M11.924 7.617a.997.997 0 0 0-.217-.324l-4.5-4.5a1 1 0 0 0-1.414 1.414L8.586 7M12 7.99a.996.996 0 0 0-.076-.373Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;