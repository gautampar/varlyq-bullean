import { Dialog, Grid } from "@mui/material";
import React from "react";
import SubscriptionModal from "./SubscriptionModal";
import '../Home/home.css';

function LogInModal({ loginOpen, Transition, handleClose, handleClickOpen }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpenSub = () => {
    setOpen(true);
  };

  const handleCloseSub = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={loginOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="dialog">
          <h2 className="dialog-title">Log in</h2>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <form action="javascriptVoid(0)">
                <label htmlFor="javascriptVoid(0)">Username</label>
                <input type="text" />
                <label htmlFor="javascriptVoid(0)">Password</label>
                <input type="password" />
              </form>
            </Grid>
          </Grid>
          <div className="subscribe">
            <button onClick={handleClickOpenSub} className="subscribe-btn">
              Log In
            </button>
            <SubscriptionModal open={open} handleClose={handleCloseSub} />
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default LogInModal;
