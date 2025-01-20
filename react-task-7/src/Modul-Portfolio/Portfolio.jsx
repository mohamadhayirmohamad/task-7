import { useState } from "react";
import styles from './Portfolio.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin  } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"; // الأيقونة الصحيحة للسهم للأعلى
function Portfolio() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        });}
    const [selectedCategory, setSelectedCategory] = useState("All");

    const images = [
        { id: 1, category: "App", src: "https://themewagon.github.io/Kelly/assets/img/masonry-portfolio/masonry-portfolio-3.jpg", alt: "" },
        { id: 2, category: "Card", src: "https://themewagon.github.io/Kelly/assets/img/masonry-portfolio/masonry-portfolio-2.jpg", alt: "" },
        { id: 3, category: "Web", src: "https://themewagon.github.io/Kelly/assets/img/masonry-portfolio/masonry-portfolio-1.jpg", alt: "" },
        { id: 4, category: "App", src: "https://themewagon.github.io/Kelly/assets/img/masonry-portfolio/masonry-portfolio-6.jpg", alt: "" },
        { id: 5, category: "Card", src: "https://themewagon.github.io/Kelly/assets/img/masonry-portfolio/masonry-portfolio-5.jpg", alt: "" },
        { id: 6, category: "Web", src: "https://themewagon.github.io/Kelly/assets/img/masonry-portfolio/masonry-portfolio-4.jpg", alt: "" },
        { id: 7, category: "Card", src: "https://themewagon.github.io/Kelly/assets/img/masonry-portfolio/masonry-portfolio-9.jpg", alt: "" },
        { id: 8, category: "Web", src: "https://themewagon.github.io/Kelly/assets/img/masonry-portfolio/masonry-portfolio-8.jpg", alt: "" },
        { id: 9, category: "App", src: "https://themewagon.github.io/Kelly/assets/img/masonry-portfolio/masonry-portfolio-9.jpg", alt: "" },

    ];
    const filteredImages =
        selectedCategory === "All"
            ? images
            : images.filter((image) => image.category === selectedCategory);
    return (<>

        <div className={styles.portfolioSection}>
            <h2 className={styles.title}>Portfolio</h2>
            <p className={styles.subtitle}>
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
            </p>

            <div className={styles.buttons}>
                {["All", "App", "Card", "Web"].map((category) => (
                    <button
                        key={category}
                        className={`${styles.button} ${selectedCategory === category ? styles.active : ""
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div  className={styles.grid}>
                {filteredImages.map((image) => (
                    <div key={image.id} className={styles.gridItem}>
                        <img src={image.src} alt={image.alt} className={styles.image} />
                    </div>
                ))}
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



    </>)
}


export default Portfolio;