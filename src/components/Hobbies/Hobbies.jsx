import styles from "./Hobbies.module.css";

export default function Hobbies() {
  return (
    <section className={styles.wrapper}>
      <h3>Mis aficiones</h3>
      <ul className={styles.hobbies}>
        <li className={styles.hobby}>
          <a
            href="https://www.behance.net/search/?search=brand%20design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Diseño de marcas
          </a>
        </li>
        <li className={styles.hobby}>
          <a
            href="https://viajes.nationalgeographic.com.es/ubicacion-exacta/cascada-mas-alta-mundo_15311"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explorar entornos naturales
          </a>
        </li>
        <li className={styles.hobby}>
          <a
            href="https://letterboxd.com/iameliasmoran/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Películas y series
          </a>
        </li>
      </ul>
    </section>
  );
}
