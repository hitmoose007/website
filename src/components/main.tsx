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
            <Heading>What is Magpy</Heading>
            </Center>
            <Text fontSize={'lg'}>
            Magpy commits to helping all blockchain-based projects make sophisticated business decisions and leverage AI in innovative areas such as Metaverse, Investment and Marketing.
            </Text>
            <Text>
            The project will also provide the following services.
            </Text>
            <UnorderedList p={'5'}>
                <ListItem>Data Infurastructure for enterprise bussiness</ListItem>
                <ListItem>Construction of a Python-based data analysis platform</ListItem>
                <ListItem>Blockchain x AI human resource development support</ListItem>
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