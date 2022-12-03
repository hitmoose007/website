//create form using chakra ui

import {
  Container,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import AuthButtons from "./authButton";
import { auth } from "../../firebase-config";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
export default function AuthForm() {
  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      //redirect user to dashboard page
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const signUpWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  //get url path name from router
  const router = useRouter();
  const { pathname } = router;
  const isLogin = pathname === "/login";
  const isSignup = pathname === "/signup";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {" "}
      <Text color={"#04B6F8"}>
        You don't need to use SQL and Python when you analyse data on <br />
        blockcahin. Enjoy!!
      </Text>
      <Box width='100%'>
        <Box position='relative'>
          <Container maxW={"auto"}>
            <Flex direction='column' align='center' justify='center'>
              <Stack spacing={4} w={"4xl"}>
                <FormControl id='email'>
                  <Flex align='center' justify='flex-end'>
                    <FormLabel
                      fontWeight={"normal"}
                      fontFamily={""}
                      bgGradient='linear(to-r, #03ABF7, #13F4FA)'
                      bgClip='text'
                    >
                      {" "}
                      Mail Address
                    </FormLabel>
                    <Input
                      backgroundColor={"white"}
                      borderColor={"cyan.400"}
                      borderRadius={"none"}
                      width='3xl'
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Flex>
                </FormControl>
                <FormControl id='password'>
                  <Flex align='center' justifyContent={"flex-end"}>
                    <FormLabel
                      fontWeight={"normal"}
                      bgGradient='linear(to-r, #03ABF7, #13F4FA)'
                      bgClip='text'
                    >
                      {" "}
                      Password
                    </FormLabel>
                    <Input
                      backgroundColor={"white"}
                      width='3xl'
                      borderColor={"cyan.400"}
                      borderRadius={"none"}
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Flex>
                </FormControl>

                <div style={{ marginTop: "20px" }}>
                  <Flex align='center' justify='space-around' width={"xl"}>
                    {isLogin && (
                      <AuthButtons
                        text='Login'
                        onSubmit1={loginWithGoogle}
                        onSubmit2={login}
                      />
                    )}
                    {isSignup && (
                      <AuthButtons
                        text='Sign Up'
                        onSubmit1={signUpWithGoogle}
                        onSubmit2={signUp}
                      />
                    )}
                  </Flex>
                </div>
              </Stack>
            </Flex>
          </Container>
        </Box>
      </Box>
    </>
  );
}
