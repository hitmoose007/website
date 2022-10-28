import { Container, SimpleGrid, Image, Heading, Link } from "@chakra-ui/react";


const Partners = () => {
    return(
        <Container maxW={'5xl'} paddingY={{base: '10', md: '50'}}>
            <Heading textAlign={'center'} paddingY={{base: '2', md: '50'}}>
            Our backers are our ecosystem
            </Heading>
            <SimpleGrid columns={{base: 2, md: 3}} spacingY={{base: 5, md: 10}} >
                <Link href='https://astar.network/' isExternal>
                    <Image 
                        src='./partner-icons/astar.png'
                        margin={'auto'}
                        display={'block'}
                        />
                </Link>
                <Link href="https://intmax.io/" isExternal>
                    <Image 
                        src='./partner-icons/intmax.png'
                        margin={'auto'}
                        display={'block'}
                        />
                </Link>
                <Link isExternal>
                    <Image 
                        src='./partner-icons/stir.png'
                        margin={'auto'}
                        display={'block'}
                        />
                </Link>
                <Link href="https://nextweb.capital/" isExternal>
                    <Image 
                        src='./partner-icons/NextWebCapital.png'
                        margin={'auto'}
                        display={'block'}
                        />
                </Link>
                <Link href="https://www.oasys.games/" isExternal>
                    <Image 
                        src='./partner-icons/OASYS.png'
                        margin={'auto'}
                        display={'block'}
                        />
                </Link>
                <Link href="https://ununifi.io/" isExternal>
                    <Image 
                        src='./partner-icons/UnUniFi.png'
                        margin={'auto'}
                        display={'block'}
                        />
                </Link>
            </SimpleGrid>
        </Container>
    );
}

export default Partners