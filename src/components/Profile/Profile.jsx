import React from "react";
import imgMe from "../../assets/img_me.jpeg";
import styles from "./Profile.module.css";

export default function Profile() {
    return (
        <>
        <div className={styles.profileWrapper}>
            <a
            href="https://www.behance.net/97f5fb57morpi"
            target="_blank"
            rel="noopener noreferrer"
            >
                <img src={imgMe} className={styles.myPic} alt="Foto de Elías" />
            </a>
            
            
         <h1>Elías Morán</h1>
         <h2>Desarrollador Web Junior</h2>
         
         <h3 className={styles.tagline}>Conoce mi perfil creativo</h3>
         <p className={styles.portfolio}>
                Portafolio:{" "}
                <a
                href="https://www.behance.net/97f5fb57morpi"
                target="_blank"
                rel="noopener noreferrer"
                >
                    Behance
                </a>
            </p>
         
         <p className={styles.aboutMe}>
            Soy un <strong>Desarrollador Web en formación</strong> con formación previa 
            en <strong>diseño gráfico</strong>. Me apasiona especialmente el 
            <strong> branding</strong> y todo lo relacionado con el diseño visual, 
            buscando siempre transmitir identidad y personalidad en cada proyecto.   
            Al mismo tiempo, me genera mucha curiosidad y ganas de aprender el 
            <strong> mundo del backend</strong>, para comprender cómo funcionan las 
            aplicaciones por dentro y complementar mi perfil creativo con una base 
            técnica sólida.
            </p>


            <h4>Mis Aficiones</h4>
            <ul className={styles.hobbies}>
                <li className={styles.hobby}>Dibujar y pintar</li>
                <li className={styles.hobby}>Explorar entornos naturales</li>
                <li className={styles.hobby}>Películas y series</li>
            </ul>



        </div>
        </>      
    )
    
}