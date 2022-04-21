import React from "react";

import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

const RepositoryListItem = ({ item }) => {
  return (
    <Grid container style={{ border: "1px solid #d0d7de", padding: 10 }}>
      <Grid item xs={12}>
        <a href="" style={{ fontWeight: "bold", textDecoration: "none" }}>
          {item.name}
        </a>
      </Grid>
      <Grid item xs={12}>
        {item.description}
      </Grid>
      <Grid item>
        <Grid container>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "18px",
                  backgroundColor: `${item.primaryLanguage.color}`,
                }}
              />
            </Grid>
            <Grid item>{item.primaryLanguage.name}</Grid>
            <Grid item>
              <Icon>star-borde</Icon>
            </Grid>
            <Grid item>mundo</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RepositoryListItem;
