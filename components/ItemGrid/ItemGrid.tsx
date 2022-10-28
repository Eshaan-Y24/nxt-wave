import React from "react";
import { homepage } from "../../api/homepage";
import styles from "./ItemGrid.module.scss";

interface ItemGridProps {
  data: homepage[];
  selectedTag: "resource" | "request" | "user";
  searchString: string;
}

export const ItemGrid: React.FC<ItemGridProps> = ({
  data,
  selectedTag,
  searchString,
}) => {
  return (
    <div className={styles.itemGrid}>
      {data
        .filter((item, index) => {
          if (selectedTag === "resource") return true;
          else return item.tag.toLowerCase() == selectedTag.toLowerCase();
        })
        .filter((item, index) => {
          if (searchString !== "")
            return (
              item.title.toLowerCase().includes(searchString.toLowerCase()) ||
              item.description
                .toLowerCase()
                .includes(searchString.toLowerCase()) ||
              item.category.toLowerCase().includes(searchString.toLowerCase())
            );
          else return true;
        })
        .map((item, index) => {
          return (
            <div key={item.id}>
              <Card
                category={item.category}
                icon_url={item.icon_url}
                description={item.description}
                id={item.id}
                link={item.link}
                tag={item.tag}
                title={item.title}
              />
            </div>
          );
        })}
    </div>
  );
};

interface CardProps {
  title: string;
  icon_url: string;
  link: string;
  description: string;
  category: string;
  tag: string;
  id: string;
}
const Card: React.FC<CardProps> = ({
  title,
  icon_url,
  link,
  description,
  category,
  tag,
  id,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitleWrapper}>
        <div className={styles.image}>
          <img src={icon_url} alt="" />
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
  );
};
