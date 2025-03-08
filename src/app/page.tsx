import Image from "next/image";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>hi i’m joe.</h1>
        <p>
          i’m currently running math & pencil, a boutique full-stack software
          and data science consultancy. I have been running it since 2011, and
          am not looking for full-time employment (unless you can convince me to
          quit of course). reach out if you need any help (ios/python/ml)
        </p>
        <p>
          i’m a full-stack software engineer + data scientist living in the
          lower east side, nyc
        </p>
        <p>i specialize in machine learning</p>
        <p>
          my current interests are the following distributed computing, bayesian
          inference, data mining, computer vision, guitar, piano, django,
          golang, hadoop, spark, asynchronous-io, wavelets, signal processing,
          harmonica, history, react.js, books, traveling, restaurants, cooking,
          alcohol, running, red wine(montepulciano), white wine (torrontes),
          casamigos blanco,
        </p>
        <p>
          i keep track of what i’m reading <a href="#">here</a>
        </p>
        <p>
          i keep a technical blog <a href="#">here</a>
        </p>
        <p>
          i write about web development <a href="#">here</a>
        </p>
        <p>
          you can find my on github <a href="#">here</a>
        </p>
        <p>
          you can find my on twitter <a href="#">here</a>
        </p>
        <p>
          i love to read, here is a list what i read this year{" "}
          <a href="#">here</a>
        </p>
        <p>i do not use facebook</p>
        <p className={styles.italic}>
          if you need any data help, ios help, backend help, or have a good book
          recommendation, please contact me at joseph dot misiti at
          mathandpencil dot com
        </p>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://mathandpencil.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </footer>
    </div>
  );
}
