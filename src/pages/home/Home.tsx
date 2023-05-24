import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CharacterCard from "../../components/Card/CharacterCard";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "../../components/Header";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { gql, useLazyQuery } from "@apollo/client";
import Navbar from "../../components/Navbar/Navbar";
import { useRecoilValue } from "recoil";
import { filter_field } from "../../atoms";
import { filter_value } from "../../atoms";
import "./Home.scss";

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        image
      }
    }
  }
`;

function Home() {
  const [page, setPage] = React.useState(1);
  let field = useRecoilValue(filter_field);
  let value = useRecoilValue(filter_value);
  let filter;
  if (field === "name") {
    filter = { name: value };
  } else if (field === "status") {
    filter = { status: value };
  } else if (field === "species") {
    filter = { species: value };
  } else if (field === "type") {
    filter = { type: value };
  } else if (field === "gender") {
    filter = { gender: value };
  } else if (field === "" || value === "") {
    filter = {};
  }

  const [getCharacters, { error, data, loading }] = useLazyQuery(
    GET_CHARACTERS,
    {
      variables: {
        page,
        filter,
      },
    }
  );

  React.useEffect(() => {
    getCharacters();
  }, []);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    getCharacters();
  };

  const handleFilter = () => {
    getCharacters();
  };

  return (
    <>
      <div className="app">
        <div className="container">
          <Header />
          <Navbar applyFilter={handleFilter} />
          <div className="main">
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  margin: "0"
                }}
              >
                {error && (
                  <>
                    <h1 style={{color: "#fff", width: '100%', textAlign: 'center'}}>something went wrong!</h1>
                    <h1 style={{ color: "#fff", width: '100%', textAlign: 'center' }}>
                      error message: {error.message}
                    </h1>
                  </>
                )}
                {loading && (
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={loading}
                  >
                    <CircularProgress color="inherit" />
                  </Backdrop>
                )}
                {data ? (
                  data.characters.results.map((character: any) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        key={character.id}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: "100%",
                          paddingLeft: "0"
                        }}
                      >
                        <CharacterCard
                          image={character.image}
                          name={character.name}
                          status={character.status}
                          species={character.species}
                          id={character.id}
                        />
                      </Grid>
                    );
                  })
                ) : (
                  <></>
                )}
              </Grid>
            </Box>
          </div>
        </div>
        {data && (
          <Stack spacing={2}>
            <Pagination
              count={data.characters.info.pages}
              page={page}
              variant="outlined"
              color="primary"
              onChange={handleChange}
            />
          </Stack>
        )}
      </div>
    </>
  );
}

export default Home;
