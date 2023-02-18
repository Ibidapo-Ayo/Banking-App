import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="w-full h-[100vh] bg-white  flex flex-col items-center justify-center" style={{ position: "fixed" }}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default Spinner;
