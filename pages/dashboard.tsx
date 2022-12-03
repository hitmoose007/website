import React from "react";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SimpleThreeColumns from "../src/components/features";
import SmallCentered from "../src/components/footer";
import CallToActionWithAnnotation from "../src/components/hero";
import SplitWithImage from "../src/components/main";
import WithSubnavigation from "../src/components/nav";
import Partners from "../src/components/partners";
import styles from "../styles/Home.module.css";
import Page from "../src/components/Page";
import AuthPage from "../src/components/Page";
import { useRouter } from "next/router";
import { auth } from "../firebase-config";

import { onAuthStateChanged } from "firebase/auth";

import { useState, useEffect } from "react";
const login: NextPage = () => {
  //check if user is authenticated and if not redirect to login page
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user) {
      setIsAuthenticated(true);
    }
  });
  {
    if (isAuthenticated) {
      return (
        <>
          <WithSubnavigation />

          <Page />
          <SmallCentered />
        </>
      );
    } else {
      return <div></div>;
    }
  }
};

export default login;
