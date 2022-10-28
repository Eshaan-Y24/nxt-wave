import React, { useState } from "react";
import { homepage } from "../../api/homepage";
import {
  ItemGrid,
  Layout,
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
