import { Movie } from '../../types';
import Tag from '../Tag';
import styles from './CardMovie.module.css';

const CardMovie = (props: Movie) => {
  const { alt, src, titulo, categoria, censura, genero, duracao } = props;
  return (
    <li className={styles.card}>
      <img src={src} alt={alt} />
      <div className={styles.container}>
        <h3>{titulo}</h3>
        <div className={styles.informacoes}>
          <div className={styles.linha1}>
            <p>{genero}</p>
            <Tag value={categoria} />
          </div>
          <div className={styles.linha2}>
            <p>{duracao}</p>
            <Tag value={censura} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardMovie;
