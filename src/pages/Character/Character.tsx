import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import "./Character.scss";
import Header from "../../components/Header";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      status
      species
      type
      gender
      origin {
        name
        type
        dimension
      }
      location {
        name
        dimension
      }
      image
      episode {
        id
        name
        episode
      }
    }
  }
`;

export default function Character() {
  const id = useParams();
  const { error, data, loading } = useQuery(GET_CHARACTER, {
    variables: id,
  });

  return (
    <div className="app">
      <Header />
      <div className="character">
        {error && (
          <>
            <h1 style={{ color: "#fff", width: "100%", textAlign: "center" }}>
              something went wrong!
            </h1>
            <h1 style={{ color: "#fff", width: "100%", textAlign: "center" }}>
              error message: {error.message}
            </h1>
          </>
        )}
        {loading && (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
        {data ? (
          <div className="character_container">
            <img
              src={data.character.image}
              alt="character"
              className="character_img"
            />
            <div className="desc">
              <h1>Name: {data.character.name}</h1>
              <div className="content">
                <p>Status: {data.character.status}</p>
                <p>Species: {data.character.species}</p>
                <p>Gender: {data.character.gender}</p>

                <TreeView
                  aria-label="multi-select"
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                  multiSelect
                  className="tree_view"
                >
                  <TreeItem nodeId="1" label="Origin">
                    <TreeItem
                      nodeId="2"
                      label={`name: ${data.character.origin.name}`}
                    />
                    <TreeItem
                      nodeId="3"
                      label={`type: ${data.character.origin.type}`}
                    />
                    <TreeItem
                      nodeId="4"
                      label={`dimension: ${data.character.origin.dimension}`}
                    />
                  </TreeItem>

                  <TreeItem nodeId="5" label="Location">
                    <TreeItem
                      nodeId="6"
                      label={`name: ${data.character.location.name}`}
                    />
                    <TreeItem
                      nodeId="7"
                      label={`dimension: ${data.character.location.dimension}`}
                    />
                  </TreeItem>

                  <TreeItem nodeId="8" label="Episodes">
                    {data.character.episode.map((episode: any) => {
                      return (
                        <TreeItem
                          key={episode.id}
                          nodeId="9"
                          label={`${episode.name} : ${episode.episode}`}
                        ></TreeItem>
                      );
                    })}
                  </TreeItem>
                </TreeView>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
