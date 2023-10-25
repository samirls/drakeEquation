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
import styles from "../DrakeEquation/DrakeEquation.module.css";
import DrawerData from "../DrakeEquation/DrawerData";

function DrakeCalculator() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const [drawerTitle, setDrawerTitle] = useState("");
  const [drawerDescription1, setDrawerDescription1] = useState("");
  const [drawerDescription2, setDrawerDescription2] = useState("");

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
        Make your evaluation of each variable to test if there is a chance of
        life in our Galaxy
      </h5>
      <Box display="flex" justifyContent="center">
        <Box
          display="flex"
          justifyContent="center"
          pt="100px"
          fontSize="2rem"
          gap="4"
          width="60%"
        >
          <Box display="flex" minW="60px">
            N =
          </Box>
          <Box>
            <Input type="number" placeholder="R*" fontSize="1.6rem" />
          </Box>
          &#8729;
          <Box>
            <Input type="number" placeholder="fp" fontSize="1.6rem" />
          </Box>
          &#8729;
          <Box>
            <Input type="number" placeholder="ne" fontSize="1.6rem" />
          </Box>
          &#8729;
          <Box>
            <Input type="number" placeholder="fl" fontSize="1.6rem" />
          </Box>
          &#8729;
          <Box>
            <Input type="number" placeholder="fi" fontSize="1.6rem" />
          </Box>
          &#8729;
          <Box>
            <Input type="number" placeholder="fc" fontSize="1.6rem" />
          </Box>
          &#8729;
          <Box>
            <Input type="number" placeholder="L" fontSize="1.6rem" />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        cursor="pointer"
        onClick={onOpen}
      >
        cheat sheet
      </Box>

      <Box display="flex" justifyContent="center" pt="20px">
        <Box
          width="50%"
          height="80px"
          background="blackAlpha.600"
          borderRadius="12px"
        >
          <Box display="flex" justifyContent="center" fontSize="1.2rem">
            Result:
          </Box>
          <Box display="flex" justifyContent="center">
            4234234
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
          Estimatives:
        </Box>
        <Box display="flex" justifyContent="center" gap={4} color='white'>
          <Button size="xs">Drake's numbers</Button>
          <Button size="xs">Low estimative</Button>
          <Button size="xs">High estimative</Button>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" alignItems='center' pt="30px" gap="5">
        <Button>Calculate</Button>
        <Button size='sm'>Reset</Button>
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
