import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  Card: {
    height: "50vh",
    marginBottom: 10,
    paddingBottom: "10px",
  },
  content: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: 800,
    marginBottom: 10,
  },
}));
export const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.Card}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="70%"
        image="https://images.pexels.com/photos/12434670/pexels-photo-12434670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography
          className={classes.content}
          variant="body2"
          color="text.secondary"
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica Lizards are a
          widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica Lizards are a
          widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica Lizards are a
          widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
