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
                                <img src="img/profile.jpg" className={styles.roundedCircle} style={{height: "350px", width:"350px"}}/>
                            </div>
                            <div className={clsx("col-md-6 col-sm-12", styles.info)}>
                            <p>  
                            I'm currently working full time as a QA Engineer in the Android Front End Automation Platform team at Shopee.
                            I recently graduated from the National University of Singapore with a Bachelor of Computing
                            in Computer Science. I love to code and contribute to open source projects when I can.
                            </p>
                            <p>
                            Apart from coding, I also like to read books, online articles and blogs as well as 
                            watch YouTube videos and podcasts to enhance my knowledge on topics that interest me
                            and provide new perspectives. I've linked some of my favourite resources in the "Top 10's"
                            section of the website. 
                            </p>
                            <p>
                            I'm also trying my hand at writing blog posts, so do be sure to check
                            out that section of the website as well.
                            </p>
                            <p>
                            Last but not the least, I've described some of the projects I've worked on in the past in a seperate
                            section.
                            </p>
                            <Link
                                className="button button--secondary button--lg"
                                to="/about-me">
                                Resume
                            </Link>
                            </div>
                        </div>
                        <div className="row" style={{padding: '3em'}}></div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}