import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../animations/your-animation.json'; // Lottie JSON 파일을 가져옵니다.

export default function LottieAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}