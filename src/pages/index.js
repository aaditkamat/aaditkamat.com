import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
        <section className={styles.hero}>
          <div className="container" >
            <h1 className={styles.heroTitle}>
              <span>Hello world, this is Aadit. </span>
              <br />
              <span> Welcome to my website! </span>
            </h1>
            <Link
              className="button button--secondary button--lg"
              to="/about-me">
                Know more
            </Link>
          </div>
        </section>
    </Layout>
  );
}
