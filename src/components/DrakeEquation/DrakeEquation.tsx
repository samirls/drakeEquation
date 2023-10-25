import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, useDisclosure } from "@chakra-ui/react";
import styles from './DrakeEquation.module.css'
import React, {useState} from "react";
import DrawerData from "./DrawerData";
import {BsCalculator} from 'react-icons/bs'

interface sizeOfUniverseProps {
  goToNextPage: () => void;
}

function DrakeEquation({goToNextPage}:sizeOfUniverseProps) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const [drawerTitle, setDrawerTitle] = useState('');
  const [drawerDescription1, setDrawerDescription1] = useState('');
  const [drawerDescription2, setDrawerDescription2] = useState('');

  const fillN = () => {
    setDrawerTitle(DrawerData[0].title);
    setDrawerDescription1(DrawerData[0].description1);
    setDrawerDescription2('');
  }

  const fillR = () => {
    setDrawerTitle(DrawerData[1].title);
    setDrawerDescription1(DrawerData[1].description1);
    setDrawerDescription2('');
  }

  const fillFpNe = () => {
    setDrawerTitle(DrawerData[2].title);
    setDrawerDescription1(DrawerData[2].description1);
    setDrawerDescription2(DrawerData[2].description2 ?? '');
  }

  const fillFlFi = () => {
    setDrawerTitle(DrawerData[3].title);
    setDrawerDescription1(DrawerData[3].description1);
    setDrawerDescription2(DrawerData[3].description2 ?? '');
  }

  const fillFcL = () => {
    setDrawerTitle(DrawerData[4].title);
    setDrawerDescription1(DrawerData[4].description1);
    setDrawerDescription2(DrawerData[4].description2 ?? '');
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
        The Drake Equation
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
        What are the odds of being alone in the universe? Our best guess.
      </h5>
      <HStack style={{display: 'flex', justifyContent: 'center', paddingTop: '100px'}}>
        <Box style={{fontSize: '3.3rem'}} className="animate__animated animate__zoomInLeft animate__slower"><span className={styles.unknow} onClick={() => {onOpen(); fillN()}}>N</span> = <span className={styles.unknow} onClick={()=> {onOpen(); fillR()}}>R*</span></Box>
        <Box style={{fontSize: '3.3rem'}} className={`${styles.unknow} animate__animated animate__zoomInDown animate__slower`} onClick={()=> {onOpen(); fillFpNe()}}><span style={{fontSize: '3rem', paddingRight: '18px', paddingLeft: '12px'}}>.</span>f<span style={{fontSize: '1.8rem'}}>p</span> <span style={{fontSize: '3rem', paddingRight: '18px'}}>.</span>n<span style={{fontSize: '1.8rem'}}>e</span></Box>
        <Box style={{fontSize: '3.3rem'}} className={`${styles.unknow} animate__animated animate__zoomInDown animate__slower`} onClick={()=> {onOpen(); fillFlFi()}}><span style={{fontSize: '3rem', paddingRight: '18px', paddingLeft: '18px'}}>.</span>f<span style={{fontSize: '1.8rem'}}>l</span> <span style={{fontSize: '3rem', paddingRight: '18px'}}>.</span>f<span style={{fontSize: '1.8rem'}}>i</span></Box>
        <Box style={{fontSize: '3.3rem'}} className={`${styles.unknow} animate__animated animate__zoomInRight animate__slower`} onClick={()=> {onOpen(); fillFcL()}}><span style={{fontSize: '3rem', paddingRight: '18px', paddingLeft: '18px'}}>.</span>f<span style={{fontSize: '1.8rem'}}>c</span> <span style={{fontSize: '3rem', paddingRight: '18px'}}>.</span>L</Box>
      </HStack>
      <Box display='flex' justifyContent='center' pt='80px' className="animate__animated animate animate__fadeIn animate__slower animate__delay-3s">
        <Button rightIcon={<BsCalculator />} onClick={goToNextPage}>Drake Calculator</Button>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='md'
        
      >
        <DrawerOverlay />
        <DrawerContent color={'whiteAlpha.800'} bg='blackAlpha.900'>
          <DrawerCloseButton />
          <DrawerHeader>{drawerTitle}</DrawerHeader>
          <DrawerBody>
            <Box>{drawerDescription1}</Box>
            <Box pt='30px'>{drawerDescription2}</Box>
          </DrawerBody>
          <DrawerFooter>
            <Button variant='link' mr={3} onClick={onClose} color='whiteAlpha.800'>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    </>
  );
}

export default DrakeEquation;
