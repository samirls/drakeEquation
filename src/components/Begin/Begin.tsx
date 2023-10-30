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
      <Box
          display= "flex"
          justifyContent= "center"
          paddingTop= '200px'
      >
        <Button 
          onClick={handleClick}
          className={fadeOut ? 'animate__animated animate__fadeOut' : 'animate__animated animate__fadeIn animate__delay-1s'}
          id="step2"
        >
          Begin
        </Button>
      </Box>
      <Box position='fixed' bottom={5} right={{base: 1, lg: 5}} className={fadeOut ? 'animate__animated animate__fadeOutRight' : 'animate__animated animate__fadeInRight'}>
        <Box display='flex' justifyContent='center' gap={{base: 3, lg: 5}}>
          <a href="https://github.com/samirls" target="_blank" rel="noreferrer"><BsGithub fontSize='2rem' color="#8264b0" cursor='pointer'/></a>
          <a href="https://www.linkedin.com/in/samir-laguardia/" target="_blank" rel="noreferrer"><BsLinkedin fontSize='2rem' color="blue" cursor='pointer'/></a>
        </Box>
        <Box fontSize='1rem' display={{base: "none", lg:'flex'}} justifyContent='center'>Made by samirls</Box>
        <Box display='flex' justifyContent='center'>Say Hello</Box>
      </Box>
    </Box>
  );
}

export default Begin;
