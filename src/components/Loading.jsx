import React from "react";
import img from "../images/load-loading.gif";

export default function Loading() {
  return (
    <div className="loading">
      <img alt="Loading" src={img} />
    </div>
  );
}
