import { lazy } from "react";
import styles from "./SongCard.module.css";

export default function SongCard({ song} ) {
    const { titulo, cantante, album, imagenAlbum, duracion, valoracion } = song;

    return (
        <li className={styles.card}>
            <figure className={styles.figure}>
                <img 
                className={styles.imagenAlbum}
                src={imagenAlbum}
                alt={`Póster de ${album}`}
                loading={lazy}
                width="300"
                height="300"
                onError={(e) => {
                e.currentTarget.src = "https://placehold.co/300x300?text=No+Image";
            }}
            />
            <figcaption className={styles.caption}>
                <h3 className={styles.title}>{titulo}</h3>
                {cantante && <h4 className={styles.cantante}>{cantante}</h4>}
                <p>
                    <span className={styles.badge}>{album}</span>
                    <span className={styles.dot}>•</span>
                    <span className={styles.duracion}>{duracion} min</span>
                    <span className={styles.dot}>•</span>
                    <span className={styles.rating}>★ {valoracion}</span>
                </p>
            </figcaption>
            </figure>
        </li>
        
    )
}