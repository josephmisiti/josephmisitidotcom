import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Main Content */}
      <main className={styles.main}>
        <h1>hi i’m joe.</h1>
        <p>
          i’m currently running{" "}
          <a href="http://www.mathandpencil.com/">math & pencil</a>, a boutique
          full-stack software and data science consultancy. I have been running
          it since 2011, and am not looking for full-time employment (unless you
          can convince me to quit of course). reach out if you need any help
          (ios/python/ml)
        </p>
        <p>
          i’m a full-stack software engineer + data scientist living in{" "}
          <a href="https://en.wikipedia.org/wiki/Miami,_Florida">
            miami, florida
          </a>
        </p>
        <p>
          i specialize in{" "}
          <a href="https://en.wikipedia.org/wiki/Machine_learning">
            machine learning
          </a>
        </p>
        <p>
          my current interests are the following{" "}
          <a href="https://en.wikipedia.org/wiki/Distributed_computing">
            distributed computing
          </a>
          ,{" "}
          <a href="https://en.wikipedia.org/wiki/Bayesian_inference">
            bayesian inference
          </a>
          , <a href="https://en.wikipedia.org/wiki/Data_mining">data mining</a>,{" "}
          <a href="https://en.wikipedia.org/wiki/Computer_vision">
            computer vision
          </a>
          ,{" "}
          <a href="https://en.wikipedia.org/wiki/C._F._Martin_%26_Company">
            guitar
          </a>
          , <a href="https://en.wikipedia.org/wiki/Piano">piano</a>,{" "}
          <a href="https://en.wikipedia.org/wiki/Django_(web_framework)">
            django
          </a>
          ,{" "}
          <a href="https://en.wikipedia.org/wiki/Go_(programming_language)">
            golang
          </a>
          , <a href="https://en.wikipedia.org/wiki/Apache_Hadoop">hadoop</a>,{" "}
          <a href="https://en.wikipedia.org/wiki/Apache_Spark">spark</a>,{" "}
          <a href="https://en.wikipedia.org/wiki/Asynchronous_I/O">
            asynchronous-io
          </a>
          , <a href="https://en.wikipedia.org/wiki/Wavelets">wavelets</a>,{" "}
          <a href="https://en.wikipedia.org/wiki/Signal_Processing">
            signal processing
          </a>
          , <a href="https://en.wikipedia.org/wiki/Harmonica">harmonica</a>,{" "}
          <a href="https://en.wikipedia.org/wiki/History">history</a>,{" "}
          <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">
            react.js
          </a>
          ,{" "}
          <a href="https://github.com/josephmisiti/reading/tree/master/books/">
            books
          </a>
          , <a href="#">traveling</a>, <a href="#">restaurants</a>,{" "}
          <a href="#">cooking</a>, <a href="#">alcohol</a>,{" "}
          <a href="#">running</a>,{" "}
          <a href="https://www.wineterroirs.com/2010/08/dard_et_ribo.html">
            syrah (dard et ribo)
          </a>
          ,{" "}
          <a href="https://www.youtube.com/watch?v=bntz_xnJ1UQ">
            poulsard (domaine cavarodes)
          </a>
          ,{" "}
          <a href="https://www.youtube.com/watch?v=EbG6OEQ54PQ&t=327s">
            macerated blends (domaine matassa)
          </a>
        </p>
        <p>
          i keep track of what i’m reading{" "}
          <a href="https://delicious.com/josephmisiti">here</a>
        </p>
        <p>
          i keep a technical blog{" "}
          <a href="http://josephmisiti.github.io">here</a>
        </p>
        <p>
          i write about web development{" "}
          <a href="https://medium.com/@josephmisiti">here</a>
        </p>
        <p>
          you can find me on github{" "}
          <a href="http://www.github.com/josephmisiti">here</a>
        </p>
        <p>
          you can find me on twitter{" "}
          <a href="http://www.twitter.com/josephmisiti">here</a>
        </p>
        <p>
          i love to read,{" "}
          <a href="https://github.com/josephmisiti/reading/tree/master/books/2015">
            here
          </a>{" "}
          is a list what i read this year
        </p>
        <p>i do not use facebook</p>
        <p className={styles.italic}>
          if you need any data help, ios help, backend help, or have a good book
          recommendation, please contact me at{" "}
          <a href="mailto:joseph.misiti@mathandpencil.com">
            joseph dot misiti at mathandpencil dot com
          </a>
        </p>
      </main>
      <footer className={styles.footer}>
        <a
          href="http://www.mathandpencil.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </footer>
    </div>
  );
}
