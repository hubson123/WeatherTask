import { GithubOutlined } from "@ant-design/icons";
import type { NextPage } from "next";
import Head from "next/head";
import useDarkMode from "use-dark-mode";
import HomeScreen from "../components/Home";
import { Button, Container, H2 } from "../components/Home/styles";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const darkmode = useDarkMode(true);
  return (
    <Container>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather app by Hubert Firek" />
        <link
          rel="icon"
          href=" http://openweathermap.org/img/wn/02d@2x.png"
          type="image/x-icon"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Concert+One&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <header className={styles.header}>
        <H2>Weather App</H2>
        <Button onClick={darkmode.toggle}>Switch Theme</Button>
      </header>
      <main className={styles.main}>
        <HomeScreen />
      </main>

      <footer className={styles.footer}>
        © Hubert Firek 2022
        <a href="https://github.com/hubson123">
          <GithubOutlined />
        </a>
      </footer>
    </Container>
  );
};

export default Home;
