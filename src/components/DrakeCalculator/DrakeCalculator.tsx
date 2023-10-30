import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spinner,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Joyride from "react-joyride";
import drakeCalculatorSteps from "../joyride/drakeCalculatorSteps";

interface DrakeCalculatorProps {
  tour: boolean;
}

function DrakeCalculator({tour}:DrakeCalculatorProps) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [variables, setVariables] = useState({
    R: -1,
    fp: -1,
    ne: -1,
    fl: -1,
    fi: -1,
    fc: -1,
    L: -1,
  });
  const [result, setResult] = useState(0);
  const [resultPressed, setResultPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [animateNumbers, setAnimateNumbers] = useState(false);
  const [animateErase, setAnimateErase] = useState(false);
  const [startTour, setStartTour] = useState(false);

  const handleCalculate = () => {
    setResult(-2);
    setResultPressed(false);
    setIsLoading(true);
    setTimeout(() => {
      const calculateResult =
        variables.R *
        variables.fp *
        variables.ne *
        variables.fl *
        variables.fi *
        variables.fc *
        variables.L;
      setResult(calculateResult);
      setIsLoading(false);
      setResultPressed(true);
    }, 600);
  };

  const drakeLowNumbers = () => {
    setAnimateNumbers(true);
    setVariables({
      R: 1,
      fp: 0.2,
      ne: 1,
      fl: 1,
      fi: 1,
      fc: 0.1,
      L: 1000,
    });
    setTimeout(() => {
      setAnimateNumbers(false);
    }, 600)
  };

  const drakeHighNumbers = () => {
    setAnimateNumbers(true);
    setVariables({
      R: 1,
      fp: 0.5,
      ne: 5,
      fl: 1,
      fi: 1,
      fc: 0.2,
      L: 100000000,
    });
    setTimeout(() => {
      setAnimateNumbers(false);
    }, 600)
  };

  const clearAllFields = () => {
    setResultPressed(false);
    setAnimateErase(true);
    setVariables({
      R: -1,
      fp: -1,
      ne: -1,
      fl: -1,
      fi: -1,
      fc: -1,
      L: -1,
    });
    setTimeout(() => {
      setAnimateErase(false);
    }, 200)
  };

  setTimeout(() => {
    setStartTour(true);
  }, 2000);

  return (
    <>
      <h1
        style={{
          fontSize: "3rem",
          display: "flex",
          justifyContent: "center",
          paddingTop: "15px",
        }}
        className="animate__animated animate__fadeInDown"
      >
        Drake Calculator
      </h1>
      <h5
        style={{
          fontSize: "1.5rem",
          display: "flex",
          justifyContent: "center",
          paddingTop: "10px",
        }}
        className="animate__animated animate__fadeInDown"
      >
        Make your own evaluation of each variable to test if there is a chance
        of life in our Galaxy
      </h5>
      <Box display="flex" justifyContent="center" className={animateErase ? "animate__animated animate__flash" : "animate__animated animate__bounce"}>
        <Box
          display="flex"
          justifyContent="center"
          mt="100px"
          fontSize="2rem"
          gap="4"
          width="80%"
          id="step7"
        >
          <Box display="flex" minW="60px">
            N =
          </Box>
          <Box>
            <Input
              textAlign="center"
              _placeholder={{ opacity: 0.7, color: "white" }}
              type="number"
              placeholder="R*"
              value={variables.R === -1 ? "" : variables.R}
              fontSize="1.6rem"
              onChange={(e) =>
                setVariables({ ...variables, R: parseFloat(e.target.value) })
              }
              className={animateNumbers ? "animate__animated animate__headShake" : ""}
            />
          </Box>
          &#8729;
          <Box>
            <Input
              textAlign="center"
              _placeholder={{ opacity: 0.7, color: "white" }}
              type="number"
              placeholder="fp"
              value={variables.fp === -1 ? "" : variables.fp}
              fontSize="1.6rem"
              onChange={(e) =>
                setVariables({ ...variables, fp: parseFloat(e.target.value) })
              }
              className={animateNumbers ? "animate__animated animate__headShake" : ""}
            />
          </Box>
          &#8729;
          <Box>
            <Input
              textAlign="center"
              _placeholder={{ opacity: 0.7, color: "white" }}
              type="number"
              placeholder="ne"
              value={variables.ne === -1 ? "" : variables.ne}
              fontSize="1.6rem"
              onChange={(e) =>
                setVariables({ ...variables, ne: parseFloat(e.target.value) })
              }
              className={animateNumbers ? "animate__animated animate__headShake" : ""}
            />
          </Box>
          &#8729;
          <Box>
            <Input
              textAlign="center"
              _placeholder={{ opacity: 0.7, color: "white" }}
              type="number"
              placeholder="fl"
              value={variables.fl === -1 ? "" : variables.fl}
              fontSize="1.6rem"
              onChange={(e) =>
                setVariables({ ...variables, fl: parseFloat(e.target.value) })
              }
              className={animateNumbers ? "animate__animated animate__headShake" : ""}
            />
          </Box>
          &#8729;
          <Box>
            <Input
              textAlign="center"
              _placeholder={{ opacity: 0.7, color: "white" }}
              type="number"
              placeholder="fi"
              value={variables.fi === -1 ? "" : variables.fi}
              fontSize="1.6rem"
              onChange={(e) =>
                setVariables({ ...variables, fi: parseFloat(e.target.value) })
              }
              className={animateNumbers ? "animate__animated animate__headShake" : ""}
            />
          </Box>
          &#8729;
          <Box>
            <Input
              textAlign="center"
              _placeholder={{ opacity: 0.7, color: "white" }}
              type="number"
              placeholder="fc"
              value={variables.fc === -1 ? "" : variables.fc}
              fontSize="1.6rem"
              onChange={(e) =>
                setVariables({ ...variables, fc: parseFloat(e.target.value) })
              }
              className={animateNumbers ? "animate__animated animate__headShake" : ""}
            />
          </Box>
          &#8729;
          <Box>
            <Input
              textAlign="center"
              _placeholder={{ opacity: 0.7, color: "white" }}
              type="number"
              placeholder="L"
              value={variables.L === -1 ? "" : variables.L}
              fontSize="1.6rem"
              onChange={(e) =>
                setVariables({ ...variables, L: parseFloat(e.target.value) })
              }
              className={animateNumbers ? "animate__animated animate__headShake" : ""}
              id="step7"
            />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        cursor="pointer"
        onClick={onOpen}
        className="animate__animated animate__bounce"
      >
        <Box display="flex" justifyContent="center" alignItems="center" gap={1} id="step8">
          cheat sheet
          <MdOpenInNew />
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" pt="20px" className="animate__animated animate__fadeIn">
        <Box
          width="50%"
          height="80px"
          background="blackAlpha.600"
          borderRadius="12px"
        >
          <Box fontSize="1.2rem" height="100%">
            {isLoading === true ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
                width='100%'
              >
                <Spinner size="lg" />
              </Box>
            ) : (
              ""
            )}
            {resultPressed && result > 0 === true ? (
              <>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="50%"
                >
                  There are{" "}
                  <span
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: "bolder",
                      padding: "9px",
                    }}
                  >
                    {result.toLocaleString()}
                  </span>
                  civilizations in our galaxy
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="50%"
                  fontSize="0.9rem"
                >
                  Result without rounding: {result}
                </Box>
              </>
            ) : null}
            {resultPressed && (result === 0) === true ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                According to you, we are alone in this vast galaxy.
              </Box>
            ) : null}
            {result === -1 ? <Box                 display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%">Inset the numbers in the fields, then press Calculate</Box> : null}
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        pt="20px"
        fontSize="1.2rem"
        className="animate__animated animate__fadeIn"
      >
        <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
          Drake Estimate:
          <Tooltip
            placement="top-start"
            label="Drake's own estimate"
            fontSize="md"
          >
            <span>
              <AiOutlineQuestionCircle />
            </span>
          </Tooltip>
        </Box>
        <Box display="flex" justifyContent="center" gap={4} color="white" id="step9">
          <Button
            size="xs"
            colorScheme="teal"
            onClick={() => drakeLowNumbers()}
          >
            Low estimative
          </Button>
          <Button
            size="xs"
            colorScheme="teal"
            onClick={() => drakeHighNumbers()}
          >
            High estimative
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        pt="30px"
        gap="5"
        className="animate__animated animate__fadeIn"
      >
        <Button id="step10" onClick={() => handleCalculate()}>Calculate</Button>
        <Button id="step11" size="sm" onClick={() => clearAllFields()}>
          Reset
        </Button>
      </Box>
      <Box width='100%' display='flex' justifyContent='flex-end' pr='40px'>
        <Box width='400px' fontStyle='oblique' textAlign='justify' >
          "Only 0.000 000 000 000 000 000 000 000 000 000 000 000 000 1% of the observable universe lies within our solar system. So lets start building starships - it's a big universe out there. :-)"
          <Box width='400px' display='flex' justifyContent='flex-end' fontWeight='bold' fontStyle='normal'>
            Richard Powell
          </Box>
        </Box>
      </Box>
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent sx={{ background: "black" }} maxW="95%">
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={
                "https://www.rochester.edu/news/are-we-alone-in-the-universe/drank-equation.jpg"
              }
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Joyride
        continuous
        run={startTour && tour}
        hideCloseButton
        scrollToFirstStep
        showProgress
        showSkipButton
        steps={drakeCalculatorSteps}
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
    </>
  );
}

export default DrakeCalculator;
