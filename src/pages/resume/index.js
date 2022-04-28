import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function Resume() {
    return (
        <Layout title="Résumé">
            <h1 className={styles.header}> Résumé </h1>
            <div style={{aspectRatio: "16 / 9"}} className="container">
                <iframe 
                    src="../resume.pdf"
                    width="100%"
                    height="100%"
                    frameborder="0"
                >
                </iframe>
            </div>
        </Layout>
    );
}