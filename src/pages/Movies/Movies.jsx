import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieBySearch } from 'services/getMoviesAndInfo';
import { Button, Form, Input } from './Movies.styled';
import { Container, Img, ImgTitle, List, ListItem } from '../Home/Home.styled';
import { Box } from 'components/Box';
import { DEFAULT_IMG, IMG_PATH, STATUS } from 'constants/constants';
import Loader from 'components/Loader';
import { BackLink } from 'pages/MovieDetails/MovieDetails.styled';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const movieTitleQuery = searchParams.get('query') ?? '';

  const { idle, pending, resolved, rejected } = STATUS;

  const [status, setStatus] = useState(idle);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (movieTitleQuery !== '') {
      async function getMovies() {
        try {
          setStatus(pending);
          const response = await getMovieBySearch(movieTitleQuery);
          setMovies(response);
          setStatus(resolved);
        } catch (error) {
          setStatus(rejected);
        }
      }
      getMovies();
    }
  }, [movieTitleQuery, pending, rejected, resolved]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function getMovies() {
      try {
        setStatus(pending);
        const response = await getMovieBySearch(searchQuery);
        setMovies(response);
        setStatus(resolved);
      } catch (error) {
        setStatus(rejected);
      }
    }

    getMovies();
  }, [pending, rejected, resolved, searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.query.value;
    setSearchQuery(inputValue);
    updateQueryString(inputValue);
    e.target.reset();
  };

  return (
    <Box>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="query" placeholder="Movie search" />
          <Button type="submit">Search</Button>
        </Form>
        {movies.length !== 0 && (
          <List>
            {movies.map(({ id, title, poster_path }) => {
              return (
                <ListItem key={id}>
                  <Link to={`${id}`} state={{ from: location }}>
                    <Img
                      src={poster_path ? IMG_PATH + poster_path : DEFAULT_IMG}
                      alt={title}
                      loading="lazy"
                    />
                    <ImgTitle>{title.toUpperCase()}</ImgTitle>
                  </Link>
                </ListItem>
              );
            })}
          </List>
        )}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      {status === 'PENDING' && <Loader />}
      {status === 'REJECTED' && (
        <Box as="div" p="4" display="flex">
          <BackLink to="/">Go home</BackLink>
          <Box
            as="b"
            textAlign="center"
            mx="auto"
            mt="5"
            fontSize="l"
            color="orangered"
          >
            Sorry, there are no details for the movie.
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Movies;
