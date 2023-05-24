import React from "react";
import Lottie from "react-lottie-player";
import LoadingJson from "../../public/loadingAnimation.json";
import styled from "styled-components"; // 이 부분을 추가하세요.

const StyledLottie = styled(Lottie)`
  width: 200px;
  height: 200px;
  position: absolute; // 이 부분을 추가하세요.
  top: 50%; // 이 부분을 추가하세요.
  left: 50%; // 이 부분을 추가하세요.
  transform: translate(-50%, -50%); // 이 부분을 추가하세요.
`;

function Loading(props) {
  return <StyledLottie loop animationData={LoadingJson} play />;
}

export default Loading;
