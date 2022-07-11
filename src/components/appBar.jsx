import { makeStyles } from "@mui/styles";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";

import InputBase from "@mui/material/InputBase";
import { Badge } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import MailIcon from "@mui/icons-material/Mail";

import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";

import { useEffect, useState } from "react";
const useStyles = makeStyles((theme) => ({
  appBarContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  toolBarConatiner: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    display: "none",
    [theme.breakpoints.up(495)]: {
      display: "block",
    },
  },
  lama: {
    display: "none",
    [theme.breakpoints.down(495)]: {
      display: "block",
    },
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  searchContainer: {
    width: "50%",
    backgroundColor: "#ecebebc9",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(496)]: {
      justifyContent: "flex-end",
    },
    [theme.breakpoints.down(480)]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
  },
  searchInput: {
    paddingLeft: theme.spacing(1),
    borderRadius: "4px",
    width: "90%",
    // backgroundColor: "#ecdfdfc9",
  },
  searchIcon: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  [theme.breakpoints.down(480)]: {
    display: (props) => (props.open ? "none !important" : "block"),
  },
  cancel: {
    [theme.breakpoints.up(480)]: {
      display: "none !important",
    },
  },
  iconsContainer: {
    alignItems: "center",
    [theme.breakpoints.down(480)]: {
      display: (props) => (props.open ? "none" : "flex"),
    },
  },
  secondeSearch: {
    [theme.breakpoints.up(480)]: { display: "none !important" },
  },
  icon: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down(360)]: {
      width: "13px !important",
    },
  },
}));

export const Appbar = () => {
  const [open, setOpen] = useState(false);

  const classess = useStyles({ open });
  useEffect(() => {
    console.log({ open });
  }, [open]);
  console.log("rendered");
  return (
    <div>
      <AppBar position="fixed" className={classess.appBarContainer}>
        <Toolbar className={classess.toolBarConatiner}>
          <Typography className={classess.logo} variant="h6">
            Lama panel
          </Typography>
          <Typography className={classess.lama} variant="h6">
            Lama
          </Typography>
          <div className={classess.searchContainer}>
            <SearchIcon className={classess.searchIcon}></SearchIcon>
            <InputBase
              className={classess.searchInput}
              placeholder="Serach...."
            ></InputBase>
            <HighlightOffIcon
              className={classess.cancel}
              onClick={() => {
                setOpen(false);
              }}
            />
          </div>

          <div className={classess.iconsContainer}>
            <SearchIcon
              onClick={() => {
                setOpen(true);
              }}
              className={classess.secondeSearch}
            ></SearchIcon>
            <Badge badgeContent={2} color="secondary" className={classess.icon}>
              <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={4} color="success" className={classess.icon}>
              <MailIcon color="action" />
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
