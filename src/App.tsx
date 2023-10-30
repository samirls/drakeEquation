import React, { useState, useEffect } from "react";
import "./App.css";
import Begin from "./components/Begin/Begin";
import { Box, Button, Switch, useStepContext } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import SizeOfUniverse from "./components/SizeOfUniverse/SizeOfUniverse";
import "animate.css";
import DrakeEquation from "./components/DrakeEquation/DrakeEquation";
import DrakeCalculator from "./components/DrakeCalculator/DrakeCalculator";
import Controls from "./components/Controls/Controls";
import { FaGear } from "react-icons/fa6";
import useStore from "../src/stores/store";
import Joyride from "react-joyride";
import appSteps from "./components/joyride/appSteps";

function App() {
  const [switchChange, setSwitchChange] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [startTour, setStartTour] = useState(false);
  const [options, setOptions] = useState(false);
  const switchPosition = useStore((state) => state.switchPosition);
  const setSwitchPosition = useStore((state) => state.setSwitchPosition);
  const tour = useStore((state) => state.tour);
  const setTour = useStore((state) => state.setTour);
  const [rememberChanges, setRememberChanges] = useState(false);

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
    if (switchPosition === 1) {
      setSwitchPosition(2);
      setSwitchChange(!switchChange);
      if (rememberChanges === true){
        localStorage.setItem("DrakeEquationSwitchPosition", "2");
      }
    } else {
      setSwitchPosition(3);
      setTimeout(() => {
        setSwitchChange(!switchChange);
        setSwitchPosition(1);
        if (rememberChanges === true){
          localStorage.setItem("DrakeEquationSwitchPosition", "1");
        }
      }, 500);
    }
  };

  const handleDisableTour = () => {
    const newDisableTour = !tour;
    setTour(newDisableTour);
    if (rememberChanges === true) {
      localStorage.setItem("DrakeEquationDisableTour", JSON.stringify(newDisableTour));
    }
  };
  setTimeout(() => {
    setStartTour(true);
  }, 1500);

  const handleRememberChanges = () => {
    if (rememberChanges === false) {
      setRememberChanges(true);
      localStorage.setItem("DrakeEquationRememberChanges", "true");
      localStorage.setItem("DrakeEquationSwitchPosition", JSON.stringify(switchPosition));
      localStorage.setItem("DrakeEquationDisableTour", JSON.stringify(tour));
    } else {
      setRememberChanges(false);
      localStorage.removeItem("DrakeEquationRememberChanges")
      localStorage.removeItem("DrakeEquationSwitchPosition")
      localStorage.removeItem("DrakeEquationDisableTour")
    }
  }

  useEffect(() => {
    const storedRememberChanges = localStorage.getItem("DrakeEquationRememberChanges");
    const storedSwitchPosition = localStorage.getItem("DrakeEquationSwitchPosition");
    const storedDisableTour = localStorage.getItem("DrakeEquationDisableTour")
    if (storedRememberChanges === "true") {
      setRememberChanges(true);
    }
    if (storedSwitchPosition !== null) {
      setSwitchPosition(Number(storedSwitchPosition));
    }
    if (storedSwitchPosition === '2') {
      setSwitchChange(true);
    }
    if (storedDisableTour === "false"){
      setTour(false)
    }


  }, []);
  


  return (
    <ChakraProvider theme={theme}>
      <Box className="App" >
        {currentPage === 1 && <Begin goToNextPage={goToNextPage} />}
        {currentPage === 2 && <SizeOfUniverse goToNextPage={goToNextPage} tour={tour}/>}
        {currentPage === 3 && <DrakeEquation goToNextPage={goToNextPage} tour={tour}/>}
        {currentPage === 4 && <DrakeCalculator tour={tour}/>}
        {options === true ? (
          <Box
            position="absolute"
            top="5"
            right="5"
            flexDir="column"
            width="190px"
            className="animate__animated animate__fadeInDown"
          >
            <Box display="flex" alignItems="center">
              <Switch
                onChange={handleSwitchChange}
                isDisabled={switchPosition === 3}
                isChecked={switchPosition === 2}
              />
              <Box pl="10px">Allow Controls</Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Switch 
                onChange={handleDisableTour}
                isChecked={!tour}
              />
              <Box pl="10px">Disable Tour</Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Switch 
                onChange={handleRememberChanges}
                isChecked={rememberChanges}
              />
              <Box pl="10px">Remember Changes</Box>
            </Box>
            <Box display="flex" justifyContent="center">
              <Button size="xs" onClick={() => setOptions(false)}>
                Close
              </Button>
            </Box>
          </Box>
        ) : (
          <Box
            position="absolute"
            top="10"
            right="5"
            flexDir="column"
            width="50px"
            cursor="pointer"
            fontSize="25px"
            onClick={() => setOptions(true)}
            className={
              options === false ? "animate__animated animate__fadeIn" : ""
            }
            id="step1"
          >
            <FaGear />
          </Box>
        )}

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
      <Joyride
        continuous
        run={startTour && tour}
        hideCloseButton
        scrollToFirstStep
        showProgress
        showSkipButton
        steps={appSteps}
        styles={{
          options: {
            arrowColor: 'gray',
            backgroundColor: "black",
            primaryColor: "#838383",
            textColor: "#ffffff",
            overlayColor: 'rgba(15, 9, 43, 0.785)',
          },
        }}
      />
    </ChakraProvider>
  );
}

export default App;
