import { Layout } from "../../components";
import { AddPage, HomePage } from "../../features";

export default function Home() {
  return (
    <Layout showAddButton={false}>
      <AddPage />
    </Layout>
  );
}
