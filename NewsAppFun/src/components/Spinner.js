import React from "react";
import loading from "./Loading.gif";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center my-3">
      <img
        src={loading}
        alt="LOADING"
        style={{ width: "40px", height: "40px" }}
      />
    </div>
  );
};
export default Spinner;
