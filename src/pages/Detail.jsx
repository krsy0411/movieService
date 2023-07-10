import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Detail() {
  // 현 url의 정보들을 가져옴 : react-router-dom의 새로운 버전의 방식
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location);
    // 만약 영화 정보가 없다면, 메인페이지로 리다이렉트
    // v6 : useHistory가 navigate로 변경
    if (location.state === null) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect보다 return 구문이 먼저 실행되기 때문에 체크
  if (location.state) {
    return <StyledH1>{location.state.title}</StyledH1>;
  } else {
    return null;
  }
}

const StyledH1 = styled.h1`
  display: flex;
  margin-top: 100px;
  justify-content: center;
`;

export default Detail;
