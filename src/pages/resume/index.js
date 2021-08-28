import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function Resume() {
    return (
        <Layout title="Resume">
            <div className={clsx("container", styles.container)}>
                <h1 className={styles.header}> RESUME </h1>
                <iframe src="resume.pdf" width="100%" height="100%" />
            </div>
        </Layout>
    );
}