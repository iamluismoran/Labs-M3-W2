import Hobbies from "../Hobbies/Hobbies";
import Profile from "../Profile/Profile";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <section className={styles.wrapper}>
            <h1>BIENVENIDO  A  MI  WEB</h1>
            <p>Este proyecto muestra mi perfil, aficiones y una de mis canciones favoritas del momento</p>

            <Profile />
            <Hobbies />
        </section>
    )
}