import React from "react";

import Grid from "@mui/material/Grid";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import GitHubIcon from "@mui/icons-material/GitHub";
import moment from "moment";

const RepositoryListItem = ({ item }) => {
  return (
    <Grid
      container
      style={{ border: "1px solid #d0d7de", padding: "20px 30px" }}
    >
      <Grid item>
        <span
          style={{ fontWeight: "bold", textDecoration: "none", color: "blue" }}
        >
          {item?.name}
        </span>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ marginTop: 10, color: "#57606a", fontWeight: "normal" }}
      >
        {item?.description}
      </Grid>
      <Grid container style={{ marginTop: 20 }}>
        <Grid item>
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
            <Grid item style={{ color: "#57606a" }}>
              {item?.primaryLanguage?.name}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            alignItems="center"
            direction="row"
            style={{ marginLeft: 20, color: "#57606a" }}
          >
            <Grid item>
              <StarBorderIcon fontSize="small" />
            </Grid>
            <Grid item style={{ marginLeft: 6, color: "#57606a" }}>
              {item?.stargazerCount}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            alignItems="center"
            direction="row"
            style={{ marginLeft: 20, color: "#57606a" }}
          >
            <Grid item>
              <GitHubIcon fontSize="small" />
            </Grid>
            <Grid item style={{ marginLeft: 6, color: "#57606a" }}>
              {item?.forkCount}
            </Grid>
          </Grid>
        </Grid>
        <Grid item alignSelf="center">
          <Grid item style={{ marginLeft: 20, fontSize: 14, color: "#57606a" }}>
            updated {moment(item?.updatedAt).format("hh")} hours ago
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RepositoryListItem;
