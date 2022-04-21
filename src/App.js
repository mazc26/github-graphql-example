import React from "react";
import Grid from "@mui/material/Grid";
import { FETCH_USERS } from "./grapghQl/index";
import RepositoryListItem from "./components/RepositoryListItem/RepositoryListItem";

import { useQuery } from "@apollo/client";

function App() {
  const { loading, error, data } = useQuery(FETCH_USERS);

  if (loading) return "Loading...";
  if (error) return <p>{error.extraInfo}</p>;

  return (
    /**TODO send isFirst or isLast item depending on index of the array to fix some styling and borders on the RepositoryList Component */
    <Grid container style={{ padding: 20, fontWeight: "bold" }}>
      <Grid style={{ marginBottom: 20 }}>Repositories:</Grid>
      {data?.organization?.repositories?.nodes?.map((item) => (
        <RepositoryListItem item={item} />
      ))}
    </Grid>
  );
}

export default App;
