import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Layout } from "../../components";
import { AddPage, HomePage } from "../../features";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const x = localStorage.getItem("authenticated");
      if (x && x !== "undefined") {
      } else {
        router.push("/login");
      }
    }
  }, []);
  return (
    <Layout showAddButton={false}>
      <AddPage />
    </Layout>
  );
}
