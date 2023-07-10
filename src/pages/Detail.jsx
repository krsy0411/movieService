import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  const { location, history } = useLocation();
  console.log(location);

  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>{location.state ? <span>{location.state.title}</span> : null}</div>
  );
}

export default Detail;
