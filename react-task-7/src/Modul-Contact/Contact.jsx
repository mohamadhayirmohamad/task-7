import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin  } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"; // الأيقونة الصحيحة للسهم للأعلى
function Contact (){
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        });}
    return(
        <>
        
    
    
    
    
        <div className={styles.contactSection}>
          <div className="container py-5">
            <h2 className={styles.title}>CONTACT</h2>
            <p className={styles.description}>
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
            <div className="row">
              {/* Form Section */}
              <div className="col-md-6">
                <form className={styles.contactForm}>
                  <input
                    type="text"
                    placeholder="Name"
                    className={`form-control ${styles.inputField}`}
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className={`form-control ${styles.inputField}`}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className={`form-control ${styles.inputField}`}
                  />
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className={`form-control ${styles.inputField}`}
                  ></textarea>
                  <button type="submit" className={styles.sendButton}>
                    SEND
                  </button>
                </form>
              </div>
    
              {/* Map Section */}
              <div className="col-md-6">
                <iframe
                  title="Google Map"
                  className={styles.map}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9991653419296!2d2.294481315673799!3d48.85884417928767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66efaaea19edb%3A0x69c7b3f4e9c42058!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1612873325432!5m2!1sen!2sfr"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
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
    
    export default Contact;
