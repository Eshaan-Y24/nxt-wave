import React, { useState } from "react";
import { Layout, PageSection, SelectionTabs } from "../../components";

export const HomePage = () => {
  const [tag, setTag] = useState<"Resources" | "Requests" | "Users">(
    "Resources"
  );

  return (
    <PageSection>
      <SelectionTabs
        selector={setTag}
        selected={tag}
        titles={["Resources", "Requests", "Users"]}
      />
      <br />
      <br />
      <br />
      {tag}
    </PageSection>
  );
};
