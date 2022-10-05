import {
    Flex,
    Stack,
    Heading,
    Text,
    Input,
    Button,
    Icon,
    useColorModeValue,
    createIcon,
  } from '@chakra-ui/react';
  
  export default function CardWithoutIllustration() {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        py={12}
        // no background color bg={useColorModeValue('gray.50', 'gray.800')}
        >
        <Stack
          boxShadow={'2xl'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          p={10}
          spacing={8}
          align={'center'}>
          <Stack align={'center'} spacing={2}>
            <Heading
              textTransform={'uppercase'}
              fontSize={'3xl'}
              color={useColorModeValue('gray.800', 'gray.200')}>
              Subscribe
            </Heading>
            <Text fontSize={'lg'} color={'gray.500'}>
              Subscribe to our newsletter & stay up to date!
            </Text>
          </Stack>
          <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
            <Input
              type={'text'}
              placeholder={'john@doe.net'}
              color={useColorModeValue('gray.800', 'gray.200')}
              bg={useColorModeValue('gray.100', 'gray.600')}
              rounded={'lg'}
              border={0}
              _focus={{
                bg: useColorModeValue('gray.200', 'gray.800'),
                outline: 'none',
              }}
            />
            <Button
              bg={'green.400'}
              rounded={'lg'}
              color={'white'}
              flex={'1 0 auto'}
              _hover={{ bg: 'green.500' }}
              _focus={{ bg: 'green.500' }}>
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }
