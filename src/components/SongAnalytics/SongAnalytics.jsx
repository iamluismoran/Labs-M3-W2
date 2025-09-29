import { useMemo } from "react";
import styles from "./SongAnalytics.module.css";
import songs from "../../../public/songs.json";

export default function SongAnalytics() {
  const { total, promedioValoracion, promedioDuracion } = useMemo(() => {
    if (!Array.isArray(songs) || !songs.length) {
      return { total: 0, promedioValoracion: 0, promedioDuracion: 0 };
    }
    const total = songs.length;
    const promedioValoracion =
      songs.reduce((acc, s) => acc + (s.valoracion || 0), 0) / total;
    const promedioDuracion =
      songs.reduce((acc, s) => acc + (s.duracion || 0), 0) / total;

    return {
      total,
      promedioValoracion: Number(promedioValoracion.toFixed(2)),
      promedioDuracion: Number(promedioDuracion.toFixed(2)),
    };
  }, []);

  return (
    <section className={styles.wrapper}>
      <h3>Estadísticas</h3>
      <ul className={styles.stats}>
        <li><strong>Canciones:</strong> {total}</li>
        <li><strong>Valoración media:</strong> {promedioValoracion} ★</li>
        <li><strong>Duración media:</strong> {promedioDuracion} min</li>
      </ul>
    </section>
  );
}