import { Button } from "@chakra-ui/react";

interface AuthButtonProps {
  text: string;
  onSubmit1: () => void;
    onSubmit2: () => void;
}
export default function authButton({ text, onSubmit1, onSubmit2 }: AuthButtonProps) {
  return (
    <>
      <Button
        marginLeft={"52"}
        textColor={"white"}
        bgGradient={"linear(to-r, #03ABF7, #13F4FA)"}
        type='submit'
        colorScheme='cyan'
        width={"36"}
        height={"16"}
        fontSize='md'
        onClick={onSubmit1}
      >
        {"  "}
        {text}
        <br /> By Google{" "}
      </Button>
      <Button
        colorScheme='cyan'
        marginLeft={""}
        textColor={"white"}
        type='submit'
        bgGradient={"linear(to-r, #03ABF7, #13F4FA)"}
        width={"36"}
        height={"16"}
        fontSize='md'
        onClick={onSubmit2}
      >
        {"  "}
        {text}
      </Button>
    </>
  );
}
