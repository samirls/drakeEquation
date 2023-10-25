import React, { useState } from "react";
import "animate.css";
import { Button } from "@chakra-ui/react";
import Title from "./Title";

interface pageTwoProps {
  goToNextPage: () => void;
}

function Begin({goToNextPage}: pageTwoProps) {

  const [fadeOut, setFadeOut] = useState(false);
  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      goToNextPage();
    }, 800);
  };


  return (
    <div>
      <div className={fadeOut ? 'animate__animated animate__fadeOutUp' : ''}>
        <Title />
      </div>
      <div
        style={{
          display: "flex",
          gap: 100,
          justifyContent: "center",
          paddingTop: '200px'
        }}
      >
        <Button 
          onClick={handleClick}
          className={fadeOut ? 'animate__animated animate__fadeOut' : 'animate__animated animate__fadeIn animate__delay-1s'}
        >
          Begin
        </Button>
      </div>
    </div>
  );
}

export default Begin;
