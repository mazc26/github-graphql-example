import React from "react";
import Grid from "@mui/material/Grid";
import { FETCH_USERS } from "./grapghQl/index";
import RepositoryListItem from "./components/RepositoryListItem/RepositoryListItem";

import { useQuery } from "@apollo/client";

function App() {
  const { loading, error, data } = useQuery(FETCH_USERS);

  if (loading) return "Loading...";
  return (
    <Grid container style={{ padding: 20 }}>
      {data?.organization?.repositories?.nodes?.map((item) => (
        <RepositoryListItem item={item} />
      ))}
    </Grid>
  );
}

export default App;
