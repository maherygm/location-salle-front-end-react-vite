import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

const ConfettiComp = ({ acivate }) => {
  const { width, height } = useWindowSize();

  const [view, setView] = useState(true);

  useEffect(() => {
    setView(true);
    setTimeout(() => {
      setView(false);
    }, 100000);
  }, [acivate]);

  return view ? <Confetti width={width} height={height} /> : null;
};

export default ConfettiComp;
