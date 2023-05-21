import title from "../../title.png";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import CharacterCard from "../../components/Card/CharacterCard";
import "./Home.scss";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
  return (
    <>
      <div className="app">
        <div className="container">
          <div className="header">
            {/* <span className='header_right'></span> */}
            <img src={title} alt="logo" width={300} />
            {/* <span className='header_left'></span> */}
          </div>
          <div className="main">
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={12} sm={4} md={4}>
                  <CharacterCard image={title} name='rick and morty' status='alive' species='human' />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <Item>2</Item>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <Item>3</Item>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <Item>4</Item>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
