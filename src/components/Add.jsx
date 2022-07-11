import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { useState } from "react";
import {
  Button,
  Dialog,
  MenuItem,
  Modal,
  ButtonGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Cancel } from "@mui/icons-material";
import { Container, height } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  add: {
    position: "fixed !important",
    bottom: 15,
    right: 15,
  },
  title: {
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  dialog: {
    display: "flex",

    justifyContent: "space-between",
  },
  container: {
    display: "flex !important ",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "500px !important",
    fontWeight: "bold",
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
}));
const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
export const Add = () => {
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const classes = useStyles();
  return (
    <>
      <Fab
        onClick={() => {
          setOpen(true);
        }}
        className={classes.add}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
      <Modal className={classes.dialog} open={open}>
        <Container className={classes.container}>
          <div className={classes.dialogItem}>
            <Typography variant="h5" className={classes.title}>
              Please Fill this Information to proceed..
            </Typography>
          </div>
          <div className={classes.dialogItem}>
            <TextField id="outlined-required" label="Required" />
          </div>
          <div className={classes.dialogItem}>
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
            />
          </div>
          <div className={classes.dialogItem}>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              value={currency}
              onChange={handleChange}
              helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className={classes.dialogItem}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                onClick={() => {
                  setOpen(false);
                }}
                variant="contained"
                color="error"
              >
                Canell
              </Button>
              <Button>Proceed</Button>
            </ButtonGroup>
          </div>
        </Container>
      </Modal>
    </>
  );
};
