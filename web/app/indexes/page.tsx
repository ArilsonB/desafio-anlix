import React from "react";
import { NextPage } from "next";
import { useGetIndexes } from "./use-get-indexes";
import IndexesTable from "./components/IndexesTable";

const IndicesPage: NextPage = (): JSX.Element => {
  const { data, isLoading } = useGetIndexes();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <IndexesTable data={data} />;
};

export default IndicesPage;
