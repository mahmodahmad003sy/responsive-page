import { Button, Grid } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { makeStyles } from "@mui/styles";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Appbar } from "./../src/components/appBar";
import { LeftBar } from "./components/LeftBar";
import { Feed } from "./components/Feed";
import { RightBar } from "./components/RightBar";
import { Add } from "./components/Add";

const useStyles = makeStyles((theme) => ({
  leftBar: {},
  RightBar: {
    [theme.breakpoints.down(600)]: {
      display: "none !important",
    },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Appbar></Appbar>

      <Grid container>
        <Grid className={classes.leftBar} xs={2} sm={2}>
          <LeftBar></LeftBar>
        </Grid>
        <Grid sm={7} xs={10}>
          <Feed></Feed>
        </Grid>
        <Grid xs={3} className={classes.RightBar}>
          <RightBar></RightBar>
        </Grid>
        <Add></Add>
      </Grid>
    </div>
  );
};

export default App;
