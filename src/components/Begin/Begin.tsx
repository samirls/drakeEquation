import React, { useState } from "react";
import "animate.css";
import { Box, Button } from "@chakra-ui/react";
import Title from "./Title";
import {BsGithub, BsLinkedin} from 'react-icons/bs'

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
    <Box>
      <Box className={fadeOut ? 'animate__animated animate__fadeOutUp' : ''}>
        <Title />
      </Box>
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
          id="step2"
        >
          Begin
        </Button>
      </div>
      <Box position='fixed' bottom={5} right={5} className={fadeOut ? 'animate__animated animate__fadeOutRight' : 'animate__animated animate__fadeInRight'}>
        <Box display='flex' justifyContent='center' gap={5}>
          <a href="https://github.com/samirls" target="_blank" rel="noreferrer"><BsGithub fontSize='2rem' color="#8264b0" cursor='pointer'/></a>
          <a href="https://www.linkedin.com/in/samir-laguardia/" target="_blank" rel="noreferrer"><BsLinkedin fontSize='2rem' color="blue" cursor='pointer'/></a>
        </Box>
        <Box fontSize='1rem' display='flex' justifyContent='center'>Made by samirls</Box>
        <Box display='flex' justifyContent='center'>Say Hello</Box>
      </Box>
    </Box>
  );
}

export default Begin;
