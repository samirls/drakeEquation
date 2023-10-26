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
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {MdOpenInNew} from 'react-icons/md'

function DrakeCalculator() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [variables, setVariables] = useState({
    R: 0,
    fp: 0,
    ne: 0,
    fl: 0,
    fi: 0,
    fc: 0,
    L: 0,
  });
  const [result, setResult] = useState(0);
  const [resultPressed, setResultPressed] = useState(false);



  const handleCalculate = () => {
    setResultPressed(true)
    const calculateResult = variables.R * variables.fp * variables.ne * variables.fl * variables.fi * variables.fc * variables.L;
    setResult(calculateResult)
  }

  const drakeLowNumbers = () => {
    setVariables({
      R: 1,
      fp: 0.2,
      ne: 1,
      fl: 1,
      fi: 1,
      fc: 0.1,
      L: 1000,
    })
  }

  const drakeHighNumbers = () => {
    setVariables({
      R: 1,
      fp: 0.5,
      ne: 5,
      fl: 1,
      fi: 1,
      fc: 0.2,
      L: 100000000,
    })
  }


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
        Make your own evaluation of each variable to test if there is a chance of
        life in our Galaxy
      </h5>
      <Box display="flex" justifyContent="center">
        <Box
          display="flex"
          justifyContent="center"
          pt="100px"
          fontSize="2rem"
          gap="4"
          width="80%"
        >
          <Box display="flex" minW="60px">
            N =
          </Box>
          <Box>
            <Input type="number" placeholder="R*" fontSize="1.6rem" onChange={(e) => setVariables({...variables, R: parseFloat(e.target.value)})}/>
          </Box>
          &#8729;
          <Box>
            <Input type="number" placeholder="fp" fontSize="1.6rem" onChange={(e) => setVariables({...variables, fp: parseFloat(e.target.value)})}/>
          </Box>
          &#8729;
          <Box>
            <Input type="number" placeholder="ne" fontSize="1.6rem" onChange={(e) => setVariables({...variables, ne: parseFloat(e.target.value)})}/>
          </Box>
          &#8729;
          <Box>
            <Input type="number" placeholder="fl" fontSize="1.6rem" onChange={(e) => setVariables({...variables, fl: parseFloat(e.target.value)})}/>
          </Box>
          &#8729;
          <Box>
            <Input type="number" placeholder="fi" fontSize="1.6rem" onChange={(e) => setVariables({...variables, fi: parseFloat(e.target.value)})}/>
          </Box>
          &#8729;
          <Box>
            <Input type="number" placeholder="fc" fontSize="1.6rem" onChange={(e) => setVariables({...variables, fc: parseFloat(e.target.value)})}/>
          </Box>
          &#8729;
          <Box>
            <Input type="number" placeholder="L" fontSize="1.6rem" onChange={(e) => setVariables({...variables, L: parseFloat(e.target.value)})}/>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        cursor="pointer"
        onClick={onOpen}
      >
        <Box         display="flex"
        justifyContent="center" alignItems='center' gap={1}>cheat sheet<MdOpenInNew/></Box>
      </Box>

      <Box display="flex" justifyContent="center" alignItems='center' pt="20px">
        <Box
          width="50%"
          height="80px"
          background="blackAlpha.600"
          borderRadius="12px"
        >
          <Box fontSize="1.2rem" height='100%'>
            {
              resultPressed && (result > 0) === true ? 
              <>
                <Box display='flex' justifyContent="center" alignItems='center' height='50%'>
                  There are <span style={{color: 'white', fontSize: '1.5rem', fontWeight: 'bolder', padding: '9px'}}>{result.toFixed()}</span>civilizations in our galaxy
                </Box >
                <Box display='flex' justifyContent="center" alignItems='center' height='50%' fontSize='0.8rem'>Result without rounding: {result}</Box>
              </>
              : null
            }
            {
              resultPressed && (result <= 0) === true ? 
              <p>
                According to you, we are alone in this vast galaxy.
              </p>
              : null
            }
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        pt="20px"
        fontSize="1.2rem"
      >
        <Box display="flex" justifyContent="center">
          Drake Estimatives:
        </Box>
        <Box display="flex" justifyContent="center" gap={4} color='white'>
          <Button size="xs" colorScheme='teal' onClick={() => drakeLowNumbers()}>Low estimative</Button>
          <Button size="xs" colorScheme='teal' onClick={() => drakeHighNumbers()}>High estimative</Button>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" alignItems='center' pt="30px" gap="5">
        <Button onClick={() => handleCalculate()}>Calculate</Button>
        <Button size='sm' >Reset</Button>
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
    </>
  );
}

export default DrakeCalculator;
