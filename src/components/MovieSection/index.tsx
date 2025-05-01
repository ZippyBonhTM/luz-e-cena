import { FaSearch } from 'react-icons/fa';
import Button from '../Button';
import Fieldset from '../Fieldset';
import InputText from '../InputText';
import styles from './MovieSection.module.css';
import MovieList from '../MovieList';
import useFetchMovies from '../../hooks/useFetchMovies';
import useFilterMovies from '../../hooks/useFilterMovies';

const MovieSection = () => {
  const { movies, error, isLoading } = useFetchMovies();
  const { searchTerm, setSearchTerm, handleSearch, filteredMovies } = useFilterMovies(movies);

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant='secondary'>
          <InputText
            placeholder='Buscar filmes.'
            value={searchTerm}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
            onKeyDown={(event) => (
              (event.key === 'Enter') && handleSearch()
            )}
          />
          <Button variant='icon' onClick={handleSearch}>
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}>Em cartaz</h1>
        {isLoading && <p>Carregando filmes...</p>}
        {error && <p className={styles.error}>{error}</p>}
        <MovieList movies={filteredMovies} />
      </section>
    </main>
  );
};

export default MovieSection;
