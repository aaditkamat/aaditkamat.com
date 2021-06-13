import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function AboutMe() {
    return (
        <Layout title="About Me">
            <div>
                <section id="about">
                    <div className="container">
                        <h1 className={styles.header}> ABOUT ME </h1>
                        <div className="row">
                            <div className="col-md-6 col-sm-12" >
                                <img src="static/img/profile.jpg" className={styles.roundedCircle} style={{height: "350px", width:"350px"}}/>
                            </div>
                            <div className={clsx("col-md-6 col-sm-12", styles.info)}>
                                <p>
                                As a college student, I delight in the fact that I have thus far been exposed to different tools and technologies and gotten the opportunity to step out of my comfort zone. I hope to extend the learning journey beyond what the school has to offer and believe that a great platform to do this is through internships. Hence, I am open to job opportunities and involving myself in new experiences.
                                </p>
                                <Link
                                    className="button button--secondary button--lg"
                                    to="/about-me">
                                    Resume
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}