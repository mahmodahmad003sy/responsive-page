import { Container, padding } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Post } from "./Post";

const useStyles = makeStyles((theme) => ({}));

export const Feed = () => {
  const classes = useStyles();
  return (
    <Container>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </Container>
  );
};
