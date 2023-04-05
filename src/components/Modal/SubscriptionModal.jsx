import { Dialog, Grid, Slide } from '@mui/material';
import React from 'react'




function SubscriptionModal({ open, Transition, handleClose}) {
  return (
    <div>
         <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <div className="dialog">
                <h2 className="dialog-title">Subscription</h2>
                <Grid container spacing={6}>
                  <Grid item xs={6}>
                    <label htmlFor="javascriptVoid(0)">Company Name</label>
                    <input type="text" />
                    <label htmlFor="javascriptVoid(0)">Concerned Person</label>
                    <input type="text" />
                    <label htmlFor="javascriptVoid(0)">Designation</label>
                    <input type="text" />
                    <label htmlFor="javascriptVoid(0)">Phone</label>
                    <input type="text" />
                    <label htmlFor="javascriptVoid(0)">Email</label>
                    <input type="text" />
                  </Grid>
                  <Grid item xs={6}>
                    <label htmlFor="javascriptVoid(0)">Industry</label>
                    <input type="text" />
                    <label htmlFor="javascriptVoid(0)">Sub Industry</label>
                    <input type="text" />
                    <label htmlFor="javascriptVoid(0)">Sub-sub Industry</label>
                    <input type="text" />
                    <label htmlFor="javascriptVoid(0)">Description</label>
                    <input type="text" />
                    <label htmlFor="javascriptVoid(0)">Revenue Range/Arr</label>
                    <input type="text" />
                  </Grid>
                </Grid>
                <div className="subscribe">
                  <button className="subscribe-btn">
                  Subscribe Now
                  </button>
                </div>
              </div>
            </Dialog>
    </div>
  )
}

export default SubscriptionModal