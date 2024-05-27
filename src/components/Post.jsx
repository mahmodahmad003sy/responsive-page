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
        image="https://media.istockphoto.com/id/1483749934/de/foto/gr%C3%BCner-fidschi-leguan-auf-einem-baumstamm.jpg?s=2048x2048&w=is&k=20&c=m44i9qnaY3OL8PokItKTmRA78FEsxc00DVnLnnWZEOA="
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
