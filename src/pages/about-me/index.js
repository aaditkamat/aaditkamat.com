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
                            in Computer Science. I love to code and <a href="https://github.com/aaditkamat">contribute to open source projects </a> when I can.
                            </p>
                            <p>
                            Apart from coding, I also like to read books, online articles and blogs as well as 
                            watch YouTube videos and podcasts to enhance my knowledge on topics that interest me
                            and provide new perspectives. I've linked some of my favourite resources in the 
                            <a href="/top10"> Top 10's</a> section of the website. 
                            </p>
                            <p>
                            Recently, I've been trying my hand at writing <a href="/blog">blog posts</a>, so do be sure to check
                            out that section of the website as well.
                            </p>
                            <p>
                            I've also described some of the <a href="/projects">projects</a> I've worked on in the past in a seperate
                            section.
                            </p>
                            <p>
                            Last but not the least, you can check out my <a href="/resume">resume</a> here.
                            </p>
                            </div>
                        </div>
                        <div className="row" style={{padding: '3em'}}></div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}