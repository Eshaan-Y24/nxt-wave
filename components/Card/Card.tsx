import React from "react";
import { CustomImage } from "../CustomImage/CustomImage";
import Tilt from "react-parallax-tilt";

import styles from "./Card.module.scss";
interface CardProps {
  title: string;
  icon_url: string;
  link: string;
  description: string;
  category: string;
  tag: string;
  id: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  icon_url,
  link,
  description,
  category,
  tag,
  id,
}) => {
  return (
    <Tilt scale={1.05} tiltMaxAngleY={10} tiltMaxAngleX={10}>
      <div className={styles.card}>
        <div className={styles.cardTitleWrapper}>
          <div className={styles.image}>
            <CustomImage src={icon_url} alt="" />
          </div>
          <div className={styles.cardLabelWrapper}>
            <p className={styles.cardTitle}>{title}</p>
            <p className={styles.cardCategory}>{category}</p>
          </div>
        </div>
        <br />
        <a href={link} className={styles.cardLink}>
          {link}
        </a>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </Tilt>
  );
};
