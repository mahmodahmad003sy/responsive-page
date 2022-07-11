import { makeStyles } from "@mui/styles";
import {
  Home,
  Person,
  List,
  PhotoCamera,
  PlayCircleOutline,
  TabletMac,
  Bookmark,
  Storefront,
  Settings,
  ExitToApp,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  item: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down(855)]: {
      justifyContent: "center",
    },
  },
  text: {
    marginLeft: `${theme.spacing(2)} !important`,
    [theme.breakpoints.down(1035)]: {
      //  display: "none",
      fontSize: "10px !important ",
    },
    [theme.breakpoints.down(855)]: {
      display: "none",
    },
  },
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  icon: {},
}));

export const LeftBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};
