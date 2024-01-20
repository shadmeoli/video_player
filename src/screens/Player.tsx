import React from "react";
import Logo from "../assets/ndc.png";
// import { countReducer } from "../store/homeStore";
// import { useNavigate } from "react-router-dom";
import video from "../assets/test.webm"

import Track from "../components/Track";
import Windowheader from "../components/Windowheader";

export default function Player() {
  // const navigate = useNavigate();
  const [counter, setCounter] = React.useState<number>(0)


  return (
    <>
      <div className="h-screen w-screen">
        <Windowheader />
        <div className="w-full h-full flex flex-row items-center justify-center font-primary bg-gray-200 transition duration-300 ease-in-out">
          <video src={video} className="h-full w-full" controls>
          </video>
        </div>
      </div>
    </>
  );
}