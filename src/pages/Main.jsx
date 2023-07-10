import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Movie from "../components/Movie";

export const Main = () => {
  const [loading, setLoading] = useState(true);
  const [moviesData, setMoviesData] = useState([]);
  const getData = async () => {
    await axios
      .get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
      .then((res) => {
        setMoviesData(res["data"]["data"]["movies"]);
        console.log(moviesData);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {loading === true ? (
        <Loader>
          <LoaderText>Loading...</LoaderText>
        </Loader>
      ) : (
        <Movies>
          {moviesData.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </Movies>
      )}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
`;

const LoaderText = styled.span``;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;

  @media screen and (max-width: 1090px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;
