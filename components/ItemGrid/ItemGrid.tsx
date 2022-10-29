import React, { useEffect, useState } from "react";
import { homepage } from "../../api/homepage";
import { Card } from "../Card/Card";
import styles from "./ItemGrid.module.scss";

interface ItemGridProps {
  data: homepage[] | null;
  selectedTag: "resource" | "request" | "user";
  searchString: string;
  page: [number, number];
  querySize: (e: number) => void;
}

export const ItemGrid: React.FC<ItemGridProps> = ({
  data,
  selectedTag,
  searchString,
  page,
  querySize,
}) => {
  const query = data
    ?.filter((item) => {
      if (selectedTag === "resource") return true;
      else return item.tag.toLowerCase() == selectedTag.toLowerCase();
    })
    ?.filter((item) => {
      if (searchString !== "")
        return (
          item.title.toLowerCase().includes(searchString.toLowerCase()) ||
          item.description.toLowerCase().includes(searchString.toLowerCase()) ||
          item.category.toLowerCase().includes(searchString.toLowerCase())
        );
      else return true;
    });

  querySize(query?.length as number);

  return (
    <div className={styles.itemGrid}>
      {query && query.length ? (
        query
          ?.filter((item, index) => {
            return index >= page[0] && index <= page[1];
          })
          ?.map((item) => {
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
          })
      ) : (
        <span>No matches found!</span>
      )}
    </div>
  );
};
