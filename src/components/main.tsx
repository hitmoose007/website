import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    UnorderedList,
    ListItem,
    Center,
    Box,
  } from '@chakra-ui/react';
  
  
  export default function SplitWithImage() {
    return (
    <Box position={'relative'} id='about'>
      <Image src='./gearMain.png' width={{base: '70%', md: '800px' }} height={'auto'} position='absolute' right={{base: 0, md: 0}} alt='gear'/>
      <Container maxW={'7xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={{base: 5, md: 100}} textAlign='center'>
          <Stack spacing={4} justifyContent='center' alignItems='center'>
            <Center>
            <Heading>Magpy</Heading>
            </Center>
            <Text fontSize={'lg'}>
            Magpy supports all blockchain-based projects make logical business decisions and leverage AI for innovative areas such as metaverse, investment and marketing.
            </Text>
            <Text>
            We, Magpy, will also provide the following services.
            </Text>
            <UnorderedList p={'5'}>
                <ListItem textAlign="left">Data infrastructure support for enterprise business</ListItem>
                <ListItem textAlign="left">All in one Python, Excel and Google spread sheets-based data analytics platform</ListItem>
                <ListItem textAlign="left">Building ML/DL product for metaverse, crypto investment and marketing</ListItem>
            </UnorderedList>
          </Stack>
          <Stack >
          <Flex>
            <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              './diagram.png'
            }
            objectFit={'cover'}
            />
          </Flex>
            </Stack>
        </SimpleGrid>
      </Container>
    </Box>
    );
  }