import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function Home() {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroTitle}>
            Hello world, this is Aadit.
            <br /> <br />
            Welcome to my 🏠 on the internet.
          </div>
        </div>
      </section>
      <section className={styles.newsletter}>
        <iframe
          src="https://aadit.substack.com/embed"
          width="480"
          height="320"
          style="border:1px solid #EEE; background:white;"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </section>
    </Layout>
  );
}
