import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Detail() {
  // 현 url의 정보들을 가져옴 : react-router-dom의 새로운 버전의 방식
  const props = useLocation().state;
  const navigate = useNavigate();

  useEffect(() => {
    console.log(props);
    // 만약 영화 정보가 없다면, 메인페이지로 리다이렉트
    // v6 : useHistory가 navigate로 변경
    if (props === null) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect보다 return 구문이 먼저 실행되기 때문에 체크
  if (props) {
    return (
      <Container>
        <StyledH1>{props.title}</StyledH1>
        <Img src={props.poster} alt={props.title}></Img>
      </Container>
    );
  } else {
    return null;
  }
}

const Container = styled.div`
  background-color: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledH1 = styled.h1`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 25%;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  border-radius: 5%;
  margin-top: 20px;
`;

export default Detail;
