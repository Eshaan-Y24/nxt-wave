import React, { useState, useEffect } from "react";
import { homepage } from "../../api/homepage";
import {
  ItemGrid,
  Loader,
  PageButtons,
  PageSection,
  Search,
  SelectionTabs,
} from "../../components";

interface HomePageProps {
  data: homepage[] | null;
}
export const HomePage: React.FC<HomePageProps> = ({ data }) => {
  const [tag, setTag] = useState<"resource" | "request" | "user">("resource");
  const [searchString, setSearchString] = useState("");
  const [page, setPage] = useState<[number, number]>([0, 5]);
  const [size, setSize] = useState(0);

  const increment = () => {
    if (page[0] + 6 < size) setPage([page[0] + 6, page[1] + 6]);
  };

  const decrement = () => {
    if (page[0] - 6 >= 0) setPage([page[0] - 6, page[1] - 6]);
  };

  useEffect(() => {
    setPage([0, 5]);
  }, [tag, searchString]);

  return (
    <PageSection>
      <SelectionTabs
        selector={setTag}
        selected={tag}
        titles={[
          { label: "Resources", value: "resource" },
          { label: "Requests", value: "request" },
          { label: "Users", value: "user" },
        ]}
      />
      <Search selector={setSearchString} selected={searchString} />
      {!data ? (
        <Loader />
      ) : (
        <ItemGrid
          querySize={setSize}
          page={page}
          key={searchString + tag}
          data={data}
          selectedTag={tag}
          searchString={searchString}
        />
      )}
      <PageButtons
        disableNext={page[1] >= size - 1}
        disablePrev={page[0] === 0}
        page={page}
        decrement={decrement}
        increment={increment}
      />
    </PageSection>
  );
};
