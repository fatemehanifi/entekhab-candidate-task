import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaveSquare, faQuestion } from "@fortawesome/free-solid-svg-icons";
import "./CharacterCard.scss";

function CharacterCard(props: any) {
  return (
    <>
      <Card className="card">
        <CardActionArea className="card_action_area">
          <CardMedia
            component="img"
            height="300"
            image={props.image}
            alt="green iguana"
            className="card_img"
          />
          <CardContent className="card_content">
            <Typography
              gutterBottom
              variant="h5"
              // component="div"
              className="character_name"
            >
              {props.name}
            </Typography>
            <Typography className="character_detail">
              <Typography
                variant="h6"
                // component="div"
                color="text.secondary"
                className="character_status"
              >
                <FontAwesomeIcon icon={faWaveSquare} />
                {props.status}
              </Typography>
              <Typography
                variant="h6"
                // component="div"
                color="text.secondary"
                className="character_species"
              >
                <FontAwesomeIcon icon={faQuestion} />
                {props.species}
              </Typography>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="card_action">
          <a href={`/${props.id}`}>Read more</a>
        </CardActions>
      </Card>
    </>
  );
}

export default CharacterCard;
