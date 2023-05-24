import React from "react";
import Lottie from "react-lottie-player";
import LoadingJson from "../../public/loadingAnimation.json";

function Loading(props) {
  return <Lottie loop animationData={LoadingJson} play></Lottie>;
}

export default Loading;
