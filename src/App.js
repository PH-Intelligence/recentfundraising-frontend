import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  ChakraProvider,
  VStack,
  Heading,
  Spacer,
  Code,
  Grid,
  theme,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Recentlogo from './recentlogo.svg';
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import HeroSection from "./components/HeroSection";
import TableMain from "./components/TableMain";

function App() {

  

  return (
    // <div className = "App">
    //   {
    //     FundingRoundsDemo.map(company => (
    //       <div key = {company.id}>
    //         <h3>{company.company_name}</h3>
    //         <h3>{company.Currency}</h3>
    //         <h3>{company.funding_round}</h3>
    //         <h3>{company.funding_amount}</h3>
    //       </div>
    //       ))
    //   }
    // </div>
  // );

    <VStack p={5}>
      <Flex>
        <NavBar></NavBar>
          <Spacer></Spacer>
      </Flex>
      <Flex>
        <HeroSection></HeroSection>
      </Flex>

      <Flex>
        <TableMain></TableMain>
      </Flex>
      <Flex>
        <Newsletter></Newsletter>
      </Flex>
    </VStack>
  );
}

export default App;
