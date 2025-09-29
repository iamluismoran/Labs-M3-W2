import { useEffect, useState } from "react";
import styles from "./SongList.module.css";
import SongCard from "../SongCard/SongCard";

export default function SongList() {
    const [songs, setSongs] = useState([]);
    const [state, setState] = useState({ loading: true, error: null });

    useEffect(() => {
        const loadSongs = async () => {
            try {
                const res = await fetch("/songs.json", { cache: "no-store"});
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();

                setSongs(Array.isArray(data) ? data.slice(0, 6) : []);
                setState({ loading: false, error: null });
            } catch (err) {
                setState ({
                    loading: false,
                    error: err.message || "Error cargando datos JSON",
                });
            }
        };
        loadSongs();
    }, []);

    if (state.loading) return <p className={styles.status}>Cargando canciones...</p>;
    if (state.error) return <p className={styles.statusError}>Error: {state.error}</p>;
    if (state.length) return <p className={styles.status}>No hay canciones disponibles</p>;

    return (
        <section className={styles.wrapper}>
            <header className={styles.header}>
                <h2>Mis Canciones Favoritas</h2>
                <span className={styles.coun}>Total: {songs.length}</span>
            </header>

            <ul className={styles.grid}>
                {songs.map((songs) => (
                    <SongCard key={song.id ?? song.titulo} song={song} />
                ))}
            </ul>
        </section>
    );
}