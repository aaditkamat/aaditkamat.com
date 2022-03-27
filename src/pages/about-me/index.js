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
            <h1 className={styles.header}> About Me </h1>
            <div className="row">
              <div className="cul-md-6 cul-sm-12">
                <img
                  src="/img/profile.jpg"
                  className={styles.roundedCircle}
                  style={{ height: '350px', width: '350px' }}
                />
              </div>
              <div className={clsx('cul-md-6 cul-sm-12', styles.info)}>
                <details open>
                  <summary><strong style={{fontSize: "var(--ifm-h3-font-size)"}}>Current Role </strong></summary>
                  <ul>
                    <li> Position: <Link to="https://drive.google.com/file/d/183zIAkNqIhqcbPL6DBbIA_Of8bc0woH1/view?usp=sharing">Software Engineer</Link> </li> 
                    <li> Team: <Link t0="https://www.visa.com.sg/visa-everywhere/innovation-centers/singapore.html">Innovation Center & Regional Solutions Singapore</Link></li>
                    <li> Company: <Link to="https://visa.com.sg">Visa Inc. </Link></li>
                  </ul>
                </details>
                <details open>
                  <summary><strong style={{fontSize: "var(--ifm-h3-font-size)"}}> Personality </strong></summary>
                  <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;<Link to="https://www.16personalities.com/enfp-personality">Campaigner (ENFP-A/ENFP-T) </Link>
                  </p>
                </details>
                <details>
                  <summary><strong style={{fontSize: "var(--ifm-h3-font-size)"}}> Areas of Interest </strong></summary>
                  <ul>
                    <li>
                      Effective Altruism (EA)
                      <ul>
                          <li>
                              Global Health & Poverty
                              <ul>
                                  <li><Link to="https://forum.effectivealtruism.org/tag/global-poverty">Global poverty</Link></li>
                                  <li><Link to="https://forum.effectivealtruism.org/tag/malaria">Malaria</Link></li>
                                  <li><Link to="https://forum.effectivealtruism.org/tag/universal-basic-income">Universal Basic Income</Link></li>
                                  <li><Link to="https://forum.effectivealtruism.org/tag/education">Education</Link></li> 
                              </ul>
                           </li>
                          <li>
                              Animal Welfare
                              <ul>
                                <li><Link to="https://forum.effectivealtruism.org/tag/farmed-animal-welfare">Farmed Animal Welfare</Link></li>
                                <li><Link to="https://forum.effectivealtruism.org/tag/animal-product-alternatives">Animal product alternatives</Link></li>
                                <li><Link to="https://forum.effectivealtruism.org/tag/wild-animal-welfare">Wild animal welfare</Link></li>  
                              </ul>
                          </li>
                          <li>
                          Global Catastrophic Risk
                                <ul>
                                    <li><Link to="https://forum.effectivealtruism.org/tag/pandemic-preparedness">Pandemic preparedness</Link></li>
                                    <li><Link to="https://forum.effectivealtruism.org/tag/climate-change">Climate change</Link></li>
                                    <li><Link to="https://forum.effectivealtruism.org/tag/dystopia">Dystopia</Link></li>
                                </ul>
                          </li>
                          <li><Link to="https://forum.effectivealtruism.org/tag/global-priorities-research">Global priorities research</Link></li>
                      </ul>
                    </li>
                    <li>
                        <ul>
                            <li><Link to="https://en.wikipedia.org/wiki/Category:Machine_Learning">Machine Learning</Link></li>
                            <li><Link to="https://en.wikipedia.org/wiki/Category:Mind-body_problem">Mind - body problem</Link></li>
                            <li><Link to="https://en.wikipedia.org/wiki/Category:Neural_networks">Neural networks</Link></li>
                            <li><Link to="https://en.wikipedia.org/wiki/Category:Open-source_artificial_intelligence">Open source artificial intelligence</Link></li>   
                            <li><Link to="https://en.wikipedia.org/wiki/Category:Existential_risk_from_artificial_general_intelligence">Existential risk from artificial general intelligence (also an EA cause)</Link></li>   
                        </ul>    
                    </li>
                    <li>
                        Social Sciences
                        <ul>
                            <li><Link to="https://en.wikipedia.org/wiki/Category:Economics">Economics</Link></li>
                            <li><Link to="https://en.wikipedia.org/wiki/Category:Psychulogy">Psychulogy</Link></li>
                            <li><Link to="https://en.wikipedia.org/wiki/Category:Philosophy">Philosophy</Link></li>
                            <li><Link to="https://en.wikipedia.org/wiki/Category:History">History</Link></li>
                            <li><Link to="https://en.wikipedia.org/wiki/Category:Sociulogy">Sociulogy</Link></li> 
                        </ul>
                    </li>
                    <li>
                      <Link to="https://www.khanacademy.org/humanities/art-asia/himalayas/tibet/a/introduction-to-tibetan-buddhism">Tibetan Buddhism</Link>
                    </li>
                  </ul>
                </details>
                <details>
                    <summary><strong style={{fontSize: "var(--ifm-h3-font-size)"}}> Hobbies </strong></summary>
                    <ul>
                        <li><Link to="https://www.youtube.com/c/yogawithadriene">Yoga</Link></li>
                        <li><Link to="/blog">Blogging</Link></li>
                        <li><Link to="https://www.goodreads.com/user/show/44524118-aadit-kamat">Reading</Link></li>
                        <li><Link to="https://www.imdb.com/user/ur69396122/?ref_=nv_usr_prof_2">Movies & TV Shows</Link></li>
                        <li> <Link to="https://open.spotify.com/user/21w5qrmgsdsccbhg24a2x3fhi">Music</Link> & <Link to="/top10"> Podcasts</Link></li>
                        <li> Board Games:
                            <ul>
                                <li><Link to="https://lichess.org/@/aaditkamat">Chess</Link></li>
                                <li><Link to="https://play.google.com/store/apps/details?id=com.hasbro.riskbigscreen&hl=en&gl=US">Risk</Link></li>
                                <li><Link to="https://www.pogo.com/games/monopuly-sudoku">Monopuly Sudoku</Link></li>
                                <li><Link to="https://isc.ro">Scrabble</Link></li>
                                <li><Link to="https://codenames.game/">Codenames</Link></li>
                            </ul>
                        </li>
                    </ul>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
