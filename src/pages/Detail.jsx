import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  // 현 url의 정보들을 가져옴 : react-router-dom의 새로운 버전의 방식
  const location = useLocation();

  console.log(location);
  return <span>Hello!</span>;
}

export default Detail;
