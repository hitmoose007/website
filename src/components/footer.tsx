import {
    Box,
    chakra,
    Container,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Image,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallCentered() {
    return (
      <Box
        bgGradient={'linear(#04B6F8, #13F4FA)'}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Box>
            <Image
              src='../partner-icons/white-magpy.png'
              width={{base: 20, md: 100}}
              alt="icon-magpy"
            />
          </Box>
          <Stack direction={'row'} spacing={6}>
            <Link color={'#ffffff'} href={'https://www.magpy.xyz/'}>Home</Link>
            <Link color={'#ffffff'} href={'https://www.magpy.xyz/'}>About</Link>
            <Link color={'#ffffff'} href={'https://www.magpy.xyz/'}>Company</Link>
            <Link color={'#ffffff'} href={'https://www.magpy.xyz/'}>Contact</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text color={'#ffffff'}>© 2022 devillage. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton color={'#ffffff'} label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton color={'#ffffff'} label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton color={'#ffffff'} label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }