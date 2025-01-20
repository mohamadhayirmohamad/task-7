import styles from './Resume.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin  } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"; // الأيقونة الصحيحة للسهم للأعلى
function Resume() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // التمرير السلس
        });}
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>Resume</h2>
                <p className={styles.subtitle}>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                    consectetur velit
                </p>

                <div className={styles.resumeContent}>
                    {/* القسم الأيسر */}
                    <div className={styles.leftColumn}>
                        <div className={styles.section}>
                            <h3 className={styles.sectionTitle}>Summary</h3>
                            <div className={styles.item}>
                                <div className={styles.timeline}>
                                    <span className={styles.circle}></span>
                                </div>
                                <div>
                                    <h4 className={styles.itemTitle}>BRANDON JOHNSON</h4>
                                    <p>
                                        Innovative and deadline-driven Graphic Designer with 3+ years
                                        of experience designing and developing user-centered
                                        digital/print marketing material from initial concept to
                                        final, polished deliverable.
                                    </p>
                                    <ul>
                                        <li>Portland par 127, Orlando, FL</li>
                                        <li>(123) 456-7891</li>
                                        <li>alice.barkley@example.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h3 className={styles.sectionTitle}>Education</h3>
                            <div className={styles.item}>
                                <div className={styles.timeline}>
                                    <span className={styles.circle}></span>
                                </div>
                                <div>
                                    <h4 className={styles.itemTitle}>
                                        MASTER OF FINE ARTS & GRAPHIC DESIGN
                                    </h4>
                                    <span className={styles.date}>2015 - 2016</span>
                                    <p>Rochester Institute of Technology, Rochester, NY</p>
                                    <p>
                                        Qui deserunt veniam. Et sed aliquam in labore tempore sed
                                        quisquam iusto autem sit.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.timeline}>
                                    <span className={styles.circle}></span>
                                </div>
                                <div>
                                    <h4 className={styles.itemTitle}>
                                        BACHELOR OF FINE ARTS & GRAPHIC DESIGN
                                    </h4>
                                    <span className={styles.date}>2010 - 2014</span>
                                    <p>Rochester Institute of Technology, Rochester, NY</p>
                                    <p>
                                        Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                                        reiciendis et quis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* القسم الأيمن */}
                    <div className={styles.rightColumn}>
                        <div className={styles.section}>
                            <h3 className={styles.sectionTitle}>Professional Experience</h3>
                            <div className={styles.item}>
                                <div className={styles.timeline}>
                                    <span className={styles.circle}></span>
                                </div>
                                <div>
                                    <h4 className={styles.itemTitle}>
                                        SENIOR GRAPHIC DESIGN SPECIALIST
                                    </h4>
                                    <span className={styles.date}>2019 - Present</span>
                                    <p>Experion, New York, NY</p>
                                    <ul>
                                        <li>
                                            Lead in the design, development, and implementation of the
                                            graphic, layout, and production communication materials
                                        </li>
                                        <li>
                                            Delegate tasks to the 7 members of the design team and
                                            provide counsel on all aspects of the project.
                                        </li>
                                        <li>
                                            Supervise the assessment of all graphic materials in order
                                            to ensure quality and accuracy of the design
                                        </li>
                                        <li>
                                            Oversee the efficient use of production project budgets
                                            ranging from $2,000 - $25,000
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.timeline}>
                                    <span className={styles.circle}></span>
                                </div>
                                <div>
                                    <h4 className={styles.itemTitle}>GRAPHIC DESIGN SPECIALIST</h4>
                                    <span className={styles.date}>2017 - 2018</span>
                                    <p>Stepping Stone Advertising, New York, NY</p>
                                    <ul>
                                        <li>
                                            Developed numerous marketing programs (logos, brochures,
                                            infographics, presentations, and advertisements).
                                        </li>
                                        <li>Managed up to 5 projects or tasks at a given time.</li>
                                        <li>
                                            Recommended and consulted with clients on the most
                                            appropriate graphic design
                                        </li>
                                        <li>
                                            Created 4+ design presentations and proposals a month for
                                            clients and account managers
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



                {/* footer start  */}
                <footer className={styles.footer}>
                    <div className={styles.container}>
                        <p>
                            © Copyright <span className={styles.brand}>Muhammad Khair </span> All Rights Reserved
                        </p>
                        <div className={styles.icons}>
                            <a href="#" className={styles.icon}>
                                <FontAwesomeIcon icon={faFacebook}  />
                            </a>
                            <a href="#" className={styles.icon}>
                                 <FontAwesomeIcon icon={faInstagram}  />
                            </a>
                            <a href="#" className={styles.icon}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                        <p>
                            Designed by <a href="#" className={styles.link}>BootstrapMade</a> Distributed by <a href="#" className={styles.link}>ThemeWagon</a>
                        </p>
                    </div>
                    {/* زر الانتقال إلى الأعلى */}
                    <button className={styles.scrollTopBtn} onClick={scrollToTop}>
                    <FontAwesomeIcon icon={ faArrowUp } />
                    
                    </button>
                </footer>

                {/* footer end  */}


        </>
    )
}
export default Resume;