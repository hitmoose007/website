import { Container, SimpleGrid, Image, Heading, Link } from "@chakra-ui/react";


const Partners = () => {
    return(
        <Container maxW={'5xl'} paddingY={{base: '10', md: '100'}}>
            <Heading textAlign={'center'} paddingY={{base: '2', md: '100'}}>
            Our backers and Chains to be supported
            </Heading>
            
            <SimpleGrid columns={{base: 3, md: 3}} spacingY={{base: 5, md: 10}} >
                <Link href='https://astar.network/' isExternal>
                    <Image 
                        src='./partner-icons/astar.png'
                        margin={'auto'}
                        display={'block'}
                        alt='Astar Network'
                        />
                </Link>
                <Link href="https://intmax.io/" isExternal>
                    <Image 
                        src='./partner-icons/intmax.png'
                        margin={'auto'}
                        display={'block'}
                        alt='Intmax'
                        />
                </Link>
                <Link href="https://weavedb.dev/" isExternal>
                    <Image 
                        src='./partner-icons/weavedb.png'
                        margin={'auto'}
                        display={'block'}
                        alt='WeaveDB'
                        />
                </Link>
                <Link href="https://nextweb.capital/" isExternal>
                    <Image 
                        src='./partner-icons/NextWebCapital.png'
                        margin={'auto'}
                        display={'block'}
                        alt='NextWeb Capital'
                        />
                </Link>
                <Link href="https://www.oasys.games/" isExternal>
                    <Image 
                        src='./partner-icons/OASYS.png'
                        margin={'auto'}
                        display={'block'}
                        alt='Oasys Chain'
                        />
                </Link>
                <Link href="https://ununifi.io/" isExternal>
                    <Image 
                        src='./partner-icons/UnUniFi.png'
                        margin={'auto'}
                        display={'block'}
                        alt='UnUnifi'
                        />
                </Link>
                <Link href="#" isExternal>
                    <Image 
                        src='./partner-icons/stir.png'
                        margin={'auto'}
                        display={'block'}
                        alt='Stir'
                        />
                </Link>
            </SimpleGrid>
        </Container>
    );
}

export default Partners