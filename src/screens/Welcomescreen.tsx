import React from "react";
import Logo from "../assets/ndc.png";
// import { countReducer } from "../store/homeStore";
import { useNavigate } from "react-router-dom";

import Track from "../components/Track";

export default function Welcomescreen() {
  const navigate = useNavigate();
  const [counter, setCounter] = React.useState<number>(0)
  // const store = useCounter()


  return (
    <>
      <div className="w-screen h-screen flex flex-row items-center justify-center font-primary bg-gray-200 transition duration-300 ease-in-out">
        <div className="flex flex-col items-center space-y-4">
          <img src={Logo} alt="" className="h-[80%] duration-500" />
          <h1 className="font-semibold">This is not a VLC alternative</h1>
          <p>This is just a video player toy project</p>
          <div className="flex flex-row space-x-2">
            <button onClick={() => navigate("/playback")} className="p-2 bg-slate-800 hover:bg-slate-900 text-slate-200 text-sm font-bold rounded h-14 w-60">Open Video</button>
          </div>
        </div>
      </div>
    </>
  );
}