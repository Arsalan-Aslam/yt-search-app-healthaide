import { useState } from "react";
import Styles from "./ReadMore.module.css";

const ReadMore = ({ content }) => {
  const text = content;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className={Styles.text}>
      {isReadMore ? text && text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className={Styles.readOrhide}>
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

export default ReadMore;
