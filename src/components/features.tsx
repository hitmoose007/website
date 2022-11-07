import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Container, Image, Heading } from '@chakra-ui/react';

interface FeatureProps {
  title: string;
  text: string;
  icon: string;
  size: number;
}

const Feature = ({ title, text, icon, size }: FeatureProps) => {
  return (
    <Stack align={'center'}>
        <Image
        src= {icon}
        boxSize={size}
        alt='feature'
        />
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'} textAlign='center'>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Container maxW={'6xl'}>
    <Heading textAlign={'center'} paddingY={{base: '0', md: '100'}}>
    Data Science Infrastructure for Blockchain World
    </Heading>

    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
        icon={'./fa-solid_database 1.png'}
        size={250}
        title={'Data Storage'}
        text={
            'Data infrastructure to enable access to blockchain data by AI and data analytics providers. You never need to build archive node only for getting blockchain data.'
        }
        />
        <Feature
        icon={'./academicons_open-data 1.png'}
        size={260}
        title={'On-chain Analytics Tool Magpy'}
        text={'Python-based on-chain data analytics platform. Magpy can connect you directly into both machine learning and deep learning world. Of course you use traditional analytics languages.'}
        />
        <Feature
        icon={'./healthicons_market-stall 1.png'}
        size={265}
        title={'On-chain Competition'}
        text={
            '"How do we use data??" Gaming Platform for training business analysts and data scientists. AI warriors will won blockchain sea world using AI.'
        }
        />
      </SimpleGrid>
    </Box>
        </Container>
  );
}