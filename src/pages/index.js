import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import dotenv from 'dotenv';
import styles from './styles.module.css';

export default function Home() {
  useEffect(() => {
    // update the window object
    window.arsturnAppKey = process.env.ARSTURN_APP_KEY;
    window.theme = { theme: 'dark', primary: '#40414f', secondary: '#343541', text: '#ffffff' };
  }, []);

  return (
    <Layout>
      <header className={clsx('hero', styles.heroTitle)}>
        <div className="container">
          <img
            src="https://avatars.githubusercontent.com/u/30969577?s=400&u=9558fc3557d79c88a7080034fe8c22654aca2e4d&v=4"
            alt="GitHub profile picture"
            style={{
              borderRadius: '200%',
              maxWidth: '200px',
            }}
          />
          <h1 className="hero__title">
            Hello world, this is Aadit.
            <br /> <br />
            Welcome to my 🏠 on the internet.
            <br /> <br />
          </h1>
          <iframe
            src="https://aadit.substack.com/embed"
            width="480"
            height="320"
            style={{ border: '1px solid #EEE', background: 'white' }}
            frameborder="0"
            scrolling="no"
          />
        </div>
      </header>
    </Layout>
  );
}
