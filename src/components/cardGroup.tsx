//make a group of three horizontal cards

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Card from "./card";

export default function CardGroup() {
  return (
    <>
      <div >
        <Flex
        opacity={'1'}
          width={"100%"}
          justifyContent={"center"}
          alignContent={"center"}
          
        >
          <Card />
          <Card />
          <Card />
        </Flex>
      </div>
    </>
  );
}
