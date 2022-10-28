import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  LinkOverlay,
  Image,
} from '@chakra-ui/react';

export default function CallToActionWithAnnotation() {
  return (
    <>
    <Box width= "100%">
      <Box position='relative'>


      <Image src='./gear.png' width={'auto'} height={{base: '70%', md: '800px' }} ms='-30' position='absolute' top={{base: "12", md: ""}} left="0" />

      <Container maxW={'auto'} >
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 4, md: 7 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={500}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            bgGradient='linear(to-b, #04B6F8, #0BD4F9, #13F4FA)'
            bgClip="text"
            lineHeight={'110%'}
            pb='2'
            >
            Pioneer of L1 and L2 Blockchain<br/> ecosystem building by AI
          </Heading>
          <Text color={'#04B6F8'}>
          Data Infurastructure for Blockchain and On-chain data <br/>analytics tool for all datascientist in the world
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Image 
                src='./hero_icon.png'
                width={{base: '70%', md: '' }}
                height={'auto'}
                />
          </Stack>
        </Stack>
      </Container>
      </Box>
    </Box>
    </>
  );
}
