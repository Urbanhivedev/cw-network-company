import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { LocalizationProvider, MobileDatePicker, TimePicker } from '@mui/lab';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopupModal({ open, setOpen}) {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };


  const closeModalPop = async () => {
   
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <center><DialogTitle>{"Select Clock In"}<span className='wave'>⏲</span></DialogTitle></center>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" style={{color: 'black'}}>
         <Grid container spacing={2}>
        <Grid item xs={6} md={2} style={{border: '0px solid red'}}>
        <p style={{color: 'black'}}><b>DAY:</b></p>
        </Grid>
        <Grid item xs={6} md={10}>
        <MobileDatePicker
          label="DATE"
          inputFormat="DD/MMMM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />
        </Grid>
        <Grid item xs={6} md={2}>
          <p style={{color: 'black'}}><b>TIME:</b></p>
        </Grid>
        <Grid item xs={6} md={4}>
        <TimePicker
          label="FROM"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />
        </Grid>
        <Grid item xs={6} md={4}>
        <TimePicker
          label="TO"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />
        </Grid>
      </Grid>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions> */}
        <center>
        <Button
          type="submit"
          // fullWidth
          variant="contained"
          style={{
            backgroundColor: "black",
            color: "white",
            // width: "50%",
            fontSize: "15px",
          }}
          onClick={() => setOpen(false)}
        >
          SUBMIT
        </Button>
        </center>
        <br/>
        {/* </DialogActions> */}
      </Dialog>
    </div>
    </LocalizationProvider>
  );
}
