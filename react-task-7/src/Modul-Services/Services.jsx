import styles from './Services.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat, faBroadcastTower, faTv, faProjectDiagram, faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin  } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"; // الأيقونة الصحيحة للسهم للأعلى
function Services() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        });}
    const services = [
        {
          icon: faHeartbeat,
          title: "Nesciunt Mete",
          description: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
          bgColor: "#00C2FF",
        },
        {
          icon: faBroadcastTower,
          title: "Eosle Commodi",
          description: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
          bgColor: "#FF9F43",
        },
        {
          icon: faTv,
          title: "Ledo Markt",
          description: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
          bgColor: "#2ECC71",
        },
        {
          icon: faProjectDiagram,
          title: "Asperiores Commodit",
          description: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
          bgColor: "#FF5B5C",
        },
        {
          icon: faCalendar,
          title: "Velit Doloremque",
          description: "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
          bgColor: "#9B59B6",
        },
        {
          icon: faComment,
          title: "Dolori Architecto",
          description: "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
          bgColor: "#FFC107",
        },
      ];

    return (
        <>


<section className={styles.servicesSection}>
      <h2 className={styles.title}>Services</h2>
      <p className={styles.subtitle}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div
              className={styles.iconWrapper}
              style={{ backgroundColor: service.bgColor }}
            >
              <FontAwesomeIcon icon={service.icon} className={styles.icon4} />
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>



    
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

export default Services