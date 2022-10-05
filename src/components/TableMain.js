import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

  export default function TableMain(){
    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                <Tr>
                    <Th>Company</Th>
                    <Th>Fundraise</Th>
                    <Th isNumeric>Date</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>Company 1</Td>
                    <Td>$25M</Td>
                    <Td isNumeric>3 Jan, 2022</Td>
                </Tr>
                <Tr>
                    <Td>Company 2</Td>
                    <Td>$50M</Td>
                    <Td isNumeric>5 Jan, 2022</Td>
                </Tr>
                <Tr>
                    <Td>Company 3</Td>
                    <Td>$55M</Td>
                    <Td isNumeric>5 Jan, 2022</Td>
                </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )  
}