import React from "react";

interface navButtonProps {
  text: string;
  path: string;
  onClick?: () => void;
  
}
import { Button } from "@chakra-ui/react";
const navButton = ({ text ,path, onClick}: navButtonProps) => {
  return (
    <Button
      as={"a"}
      fontSize={"sm"}
      fontWeight={400}
      variant={"outline"}
      color={"#04B6F8"}
      borderColor={"#04B6F8"}
      href={path}
        onClick={onClick}

    >
      {text}
    </Button>
  );
};

export default navButton;
