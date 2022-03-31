import type { NextPage } from "next";
import Head from "next/head";
import HomeScreen from "../components/Home";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather app by Hubert Firek" />
        <link
          rel="icon"
          href=" http://openweathermap.org/img/wn/02d@2x.png"
          type="image/x-icon"
        ></link>
      </Head>

      <main className={styles.main}>
        <HomeScreen />
      </main>

      <footer className={styles.footer}>© Hubert Firek 2022</footer>
    </div>
  );
};

export default Home;
