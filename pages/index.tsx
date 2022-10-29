import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { homepage } from "../api/homepage";
import { Layout } from "../components";
import { HomePage } from "../features";
import { getData } from "../functions";

export default function Home() {
  const [data, setData] = useState<homepage[] | null>(null);
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const x = localStorage.getItem("authenticated");
      if (x && x !== "undefined") {
        getData(setData);
      } else {
        router.push("/login");
      }
    }
  }, []);

  return (
    <Layout>
      <HomePage data={data} />
    </Layout>
  );
}
