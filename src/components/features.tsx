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
    Data Science Infurastructure for Blockchain World
    </Heading>

    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
        icon={'./fa-solid_database 1.png'}
        size={250}
        title={'Data Storage'}
        text={
            'Data infrastructure to enable access to blockchain data by AI and data analysis providers'
        }
        />
        <Feature
        icon={'./academicons_open-data 1.png'}
        size={260}
        title={'On-chain Analytics Tool Magpy'}
        text={'Python-based on-chain data analysis platform'}
        />
        <Feature
        icon={'./healthicons_market-stall 1.png'}
        size={265}
        title={'On-chain Competition'}
        text={
            'Platform for training data scientists who can leverage blockchain and AI'
        }
        />
      </SimpleGrid>
    </Box>
        </Container>
  );
}