import React, { useState } from "react";
import { ItemGrid, Layout, PageSection, SelectionTabs } from "../../components";
import data from "../../data/dummy.json";
export const HomePage = () => {
  const [tag, setTag] = useState<"resource" | "request" | "user">("resource");

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
      <ItemGrid data={data} selectedTag={tag} searchString={""} />
      {tag}
    </PageSection>
  );
};
