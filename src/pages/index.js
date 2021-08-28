import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { SiLinkedin, SiQuora, SiTwitter, SiGithub, SiMedium} from 'react-icons/si'

export default function Home() {
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
              <a href="https://linkedin.com/in/aaditkamat"><SiLinkedin className={styles.icon}/></a>
              <a href="https://quora.com/profile/Aadit-Kamat"><SiQuora className={styles.icon}/></a>
              <a href="https://twitter.com/aaditkamat"><SiTwitter className={styles.icon} /></a>
              <a href="https://github.com/aaditkamat"><SiGithub className={styles.icon} /></a>
              <a href="https://medium.com/aaditkamat"><SiMedium className={styles.icon} /></a>
            </div>
            
          </div>
        </section>
    </Layout>
  );
}
