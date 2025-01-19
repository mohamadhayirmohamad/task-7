
import styles from './Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin  } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"; // الأيقونة الصحيحة للسهم للأعلى
function Home() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // التمرير السلس
        });}
        return (
            <>
                <div className={styles.imgbg}>
                    <div className={styles.overlay}>
                        <div className={styles.text}>
                            <h1>Kelly Adams</h1>
                            <p>I m a professional illustrator from San Francisco</p>
                            <button className={styles.button}>ABOUT ME</button>
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

    export default Home;
