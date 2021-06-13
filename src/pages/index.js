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
        <Navbar />
        <div className="container landing">
           <h1> Hi, my name is Aadit Rahul Kamat! </h1>
           <p> Full Stack Developer </p>
           <Link
             className="button button--secondary button--lg"
             to="/about-me">
               Know more
           </Link>
        </div>
        <Footer />
    </Layout>
  );
}
