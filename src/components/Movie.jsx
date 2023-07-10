import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Movie = ({ id, year, title, summary, poster, genres }) => {
  return (
    <Container>
      <div className="movie__detail">
        {/* Detail component로 넘어가기 */}
        <StyledLink
          to={{
            pathname: `/movie/${id}`,
            state: {
              year,
              title,
              summary,
              poster,
              genres,
            },
          }}
        >
          <Img src={poster} alt={title} title={title} />
          <div className="movie__data">
            <Title>{title}</Title>
            <Year>{year}</Year>
            <Genres>
              {genres.map((genre, index) => (
                <GenreLi key={index}>{genre}</GenreLi>
              ))}
            </Genres>
            <p className="movie_summary">{summary.slice(0, 180)}...</p>
          </div>
        </StyledLink>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  margin-bottom: 70px;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  text-decoration: none !important;
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 300;
  margin-bottom: 5px;
  font-size: 24px;
  color: #2c2c2c;
`;

const Img = styled.img`
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;

const Year = styled.h5`
  margin: 0;
  font-weight: 300;
`;

const Genres = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0;
`;

const GenreLi = styled.li`
  margin-right: 10px;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Movie;
