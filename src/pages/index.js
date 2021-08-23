import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { SiLinkedin, SiQuora, SiTwitter, SiGithub, SiMedium} from 'react-icons/si'

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroTitle}>
              Hello world, this is Aadit. 
              <br /> <br /> 
              Welcome to my 🏠
              <br /> <br />
              You can also find me on:
              <br /> <br/>
              <SiLinkedin />
              <SiQuora />
              <SiTwitter />
              <SiGithub />
              <SiMedium />
            </div>
            
          </div>
        </section>
    </Layout>
  );
}
