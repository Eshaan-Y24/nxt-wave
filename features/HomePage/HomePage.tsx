import React, { useState } from "react";
import {
  ItemGrid,
  Layout,
  PageSection,
  Search,
  SelectionTabs,
} from "../../components";
import data from "../../data/dummy.json";
export const HomePage = () => {
  const [tag, setTag] = useState<"resource" | "request" | "user">("resource");
  const [searchString, setSearchString] = useState("");
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
      <ItemGrid
        key={searchString + tag}
        data={data}
        selectedTag={tag}
        searchString={searchString}
      />
    </PageSection>
  );
};
