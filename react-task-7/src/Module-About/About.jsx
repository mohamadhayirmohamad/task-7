import styles from './About.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"; // الأيقونة الصحيحة للسهم للأعلى


function About() {
    const data = [
        { id: 1, number: 232, label: "Clients" },
        { id: 2, number: 521, label: "Projects" },
        { id: 3, number: 1453, label: "Hours Of Support" },
        { id: 4, number: 32, label: "Workers" },
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // التمرير السلس
        });
    }
    return (
        <>
            <div className={styles.container}>
                <section className={styles.aboutSection}>
                    <h2>About</h2>
                    <p className={styles.subtitle}>
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </p>
                    <div className={styles.aboutContent}>
                        <img
                            src="https://themewagon.github.io/Kelly/assets/img/profile-img.jpg"
                            alt="Profile"
                            className={styles.profileImage}
                        />
                        <div className={styles.info}>
                            <h3>UI/UX Designer & Web Developer</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.
                            </p>
                            <ul>
                                <li><strong>Birthday:</strong> 1 May 1995</li>
                                <li><strong>Website:</strong> www.example.com</li>
                                <li><strong>Phone:</strong> +123 456 7890</li>
                                <li><strong>City:</strong> New York, USA</li>
                                <li><strong>Age:</strong> 30</li>
                                <li><strong>Degree:</strong> Master</li>
                                <li><strong>Email:</strong> email@example.com</li>
                                <li><strong>Freelance:</strong> Available</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={styles.skillsSection}>
                    <h2>Skills</h2>
                    <p className={styles.subtitle}>
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </p>
                    <div className={styles.skillsContainer}>
                        <div className={styles.skillBar}>
                            <span>HTML</span>
                            <div className={styles.barOuter}>

                                <div className={styles.barInner} style={{ width: "100%" }}> </div>
                            </div>
                        </div>
                        <div className={styles.skillBar}>
                            <span>CSS</span>
                            <div className={styles.barOuter}>
                                <div className={styles.barInner} style={{ width: "90%" }}></div>
                            </div>
                        </div>
                        <div className={styles.skillBar}>
                            <span>JavaScript</span>
                            <div className={styles.barOuter}>
                                <div className={styles.barInner} style={{ width: "75%" }}></div>
                            </div>
                        </div>
                        <div className={styles.skillBar}>
                            <span>PHP</span>
                            <div className={styles.barOuter}>
                                <div className={styles.barInner} style={{ width: "80%" }}></div>
                            </div>
                        </div>
                        <div className={styles.skillBar}>
                            <span>WordPress/CMS</span>
                            <div className={styles.barOuter}>
                                <div className={styles.barInner} style={{ width: "90%" }}></div>
                            </div>
                        </div>
                        <div className={styles.skillBar}>
                            <span>Photoshop</span>
                            <div className={styles.barOuter}>
                                <div className={styles.barInner} style={{ width: "55%" }}></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            {/* data start  */}
            <div className={`${styles.skillsSection} mt-5`}>
                <h2 className={`${styles.skillsSection} mt-5 p-5`}>Facts</h2>
                <p className={styles.subtitle}>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                    consectetur velit
                </p>
                <div className={styles.counters}>
                    {data.map((item) => (
                        <div key={item.id} className={styles.counter}>
                            <h3 className={styles.number}>{item.number}</h3>
                            <hr className={styles.divider} />
                            <p className={styles.label}>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
















            {/* carosel strat  */}
            {/* Indicators */}



            <section className={styles.skillsSection}>
                <h2 className=' mt-5 p-3'>Testimonials</h2>
                <p className={styles.subtitle}>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>
            </section>

            <div className="container my-5 ">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex">
                                <div className={styles.cardContainer}>
                                    <div className="d-flex justify-content-center ">
                                        <div className=" ">
                                            <div className={`${styles.imageContainer} d-flex  justify-content-center`}>
                                                <img
                                                    src="https://themewagon.github.io/Mentor/assets/img/testimonials/testimonials-1.jpg"
                                                    alt="User"
                                                    className={styles.image}
                                                />
                                            </div>
                                            <div className={styles.textContainer}>
                                                <h5 className={styles.name}>Saul Goodman</h5>
                                                <p className={styles.title}>CEO & Founder</p>
                                                <div className={styles.rating}>
                                                    {Array.from({ length: 5 }).map((_, index) => (
                                                        <FontAwesomeIcon key={index} icon={faStar} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={styles.quote}>
                                        <span>&ldquo;</span> Proin iaculis purus consequat sem cure digni ssim
                                        donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                                        eget id, aliquam eget nibh et. <span>&rdquo;</span>
                                    </p>

                                </div>


                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex">
                                <div className={styles.cardContainer}>
                                    <div className="d-flex justify-content-center ">
                                        <div className=" ">
                                            <div className={`${styles.imageContainer} d-flex justify-content-center`}>
                                                <img
                                                    src="https://themewagon.github.io/Mentor/assets/img/testimonials/testimonials-3.jpg"
                                                    alt="User"
                                                    className={styles.image}
                                                />
                                            </div>
                                            <div className={styles.textContainer}>
                                                <h5 className={styles.name}>Saul Goodman</h5>
                                                <p className={styles.title}>CEO & Founder</p>
                                                <div className={styles.rating}>
                                                    {Array.from({ length: 5 }).map((_, index) => (
                                                        <FontAwesomeIcon key={index} icon={faStar} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={styles.quote}>
                                        <span>&ldquo;</span> Proin iaculis purus consequat sem cure digni ssim
                                        donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                                        eget id, aliquam eget nibh et. <span>&rdquo;</span>
                                    </p>

                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex">
                                <div className={styles.cardContainer}>
                                    <div className="d-flex justify-content-center ">
                                        <div className=" ">
                                            <div className={`${styles.imageContainer} d-flex justify-content-center`}>
                                                <img
                                                    src="https://themewagon.github.io/Mentor/assets/img/testimonials/testimonials-2.jpg"
                                                    alt="User"
                                                    className={styles.image}
                                                />
                                            </div>
                                            <div className={styles.textContainer}>
                                                <h5 className={styles.name}>Saul Goodman</h5>
                                                <p className={styles.title}>CEO & Founder</p>
                                                <div className={styles.rating}>
                                                    {Array.from({ length: 5 }).map((_, index) => (
                                                        <FontAwesomeIcon key={index} icon={faStar} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={styles.quote}>
                                        <span>&ldquo;</span> Proin iaculis purus consequat sem cure digni ssim
                                        donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                                        eget id, aliquam eget nibh et. <span>&rdquo;</span>
                                    </p>

                                </div>

                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <div className={styles.cardContainer}>
                                    <div className="d-flex justify-content-center ">
                                        <div className=" ">
                                            <div className={`${styles.imageContainer} d-flex justify-content-center`}>

                                                <img
                                                    src="https://themewagon.github.io/Mentor/assets/img/testimonials/testimonials-2.jpg"
                                                    alt="User"
                                                    className={styles.image}
                                                />
                                            </div>
                                            <div className={styles.textContainer}>
                                                <h5 className={styles.name}>Saul Goodman</h5>
                                                <p className={styles.title}>CEO & Founder</p>
                                                <div className={styles.rating}>
                                                    {Array.from({ length: 5 }).map((_, index) => (
                                                        <FontAwesomeIcon key={index} icon={faStar} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={styles.quote}>
                                        <span>&ldquo;</span> Proin iaculis purus consequat sem cure digni ssim
                                        donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                                        eget id, aliquam eget nibh et. <span>&rdquo;</span>
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={styles.carouselIndicators}>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className={`${styles.indicatorButton} active`}
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            className={styles.indicatorButton}
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            className={styles.indicatorButton}
                            aria-label="Slide 3"
                        ></button>

                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            className={styles.indicatorButton}
                            aria-label="Slide 3"
                        ></button>


                    </div>
                </div>
            </div>

            {/* carosel end  */}

            {/* footer start  */}
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <p>
                        © Copyright <span className={styles.brand}>Muhammad Khair </span> All Rights Reserved
                    </p>
                    <div className={styles.icons}>
                        <a href="#" className={styles.icon}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className={styles.icon}>
                            <FontAwesomeIcon icon={faInstagram} />
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
                    <FontAwesomeIcon icon={faArrowUp} />

                </button>
            </footer>

            {/* footer end  */}


        </>
    )
}

export default About;