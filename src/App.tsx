import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dnd from "./dndTutorial/Dnd";
import DragAstrounaut from "./components/DragAstronaut";
import Begin from "./components/Begin";
import Title from "./components/Title";
import { Box, Switch } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import DragAstrounaut2 from "./components/DragAstronaut2";
import SizeOfUniverse from "./components/SizeOfUniverse/SizeOfUniverse";
import "animate.css";
import DrakeEquation from "./components/DrakeEquation/DrakeEquation";
import DrakeCalculator from "./components/DrakeCalculator/DrakeCalculator";
import Controls from "./components/Controls/Controls";

function App() {
  const [begin, setBegin] = useState(true);
  const [sizeOfUniverse, setSizeOfUniverse] = useState(false);
  const [drakeEquation, setDrakeEquation] = useState(false);
  const [drakeCalculator, setDrakeCalculator] = useState(false);
  const [switchChange, setSwitchChange] = useState(false);
  const [switchPosition, setSwitchPosition] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const pageTwo = () => {
    setBegin(false);
    setSizeOfUniverse(true);
  };

  const pageThree = () => {
    setSizeOfUniverse(false);
    setDrakeEquation(true);
  };

  const pageFour = () => {
    setDrakeEquation(false);
    setDrakeCalculator(true);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < 4) { 
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSwitchChange = () => {
    if (switchChange){
      setSwitchPosition(3) 
      setTimeout(() => {
        setSwitchChange(!switchChange);
        setSwitchPosition(1);
      }, 500);
    } else {
      setSwitchPosition(2);
      setSwitchChange(!switchChange);
    }
  };


  return (
    <ChakraProvider theme={theme}>
      <Box className="App">
        {currentPage === 1 && <Begin goToNextPage={goToNextPage} />}
        {currentPage === 2 && <SizeOfUniverse goToNextPage={goToNextPage} />}
        {currentPage === 3 && <DrakeEquation goToNextPage={goToNextPage} />}
        {currentPage === 4 && <DrakeCalculator />}
        <Box
          position="absolute"
          top="5"
          right="5"
          display="flex"
          alignItems="center"
        >
          <Switch onChange={handleSwitchChange} isDisabled={switchPosition === 3} />
          <Box pl="10px">Allow Controls</Box>
        </Box>
        {switchChange && (
          <Controls
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
            switchPosition={switchPosition}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
