import React, { useEffect, useState } from "react";
import { homepage } from "../api/homepage";
import { Layout } from "../components";
import { HomePage } from "../features";
import { getData } from "../functions";

export default function Home() {
  const [data, setData] = useState<homepage[] | null>(null);
  useEffect(() => {
    getData(setData);
  }, []);

  return (
    <Layout>
      <HomePage data={data} />
    </Layout>
  );
}
