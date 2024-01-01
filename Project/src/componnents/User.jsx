import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import GlobalState from "../store/GlobalState";
import Detailsview from "./Detailsview";
import Services from "./Services";
import * as React from 'react'; import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'; import Select from '@mui/material/Select';
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Alert } from "@mui/material";


//user component that contain services list bussins details and modal to add event
const User = observer(() => {
  //at Entrance init saervices
  useEffect(() => {
    GlobalState.initServices();
  }, []);
  //useStates
  const [id, setId] = useState("");
  const [serviceType, setserviceType] = useState("");
  const [dateTime, setdateTime] = useState('');
  const [clientName, setclientName] = useState("");
  const [clientPhone, setclientPhone] = useState("");
  const [clientEmail, setclientEmail] = useState("");
  const [age, setAge] = useState("");
  //functions
  //update the events list and get also close modal
  const toShow = () => {
    GlobalState.setIsClicked(true);
    {
      GlobalState.isDate && GlobalState.isSelect ?
      GlobalState.postEvents({ id: id, serviceType: age, dateTime: dateTime, clientName: clientName, clientPhone: clientPhone, clientEmail: clientEmail }).then(
        r => getEvents()) &&
      handleClose(): <></>
    }
    deleteProp();
  }
  //init props
  const deleteProp = () => {
    setId("")
    setserviceType("")
    setclientEmail("")
    setclientName("")
    setclientPhone("")
    setdateTime("")
    id = ""
  }
  const handleChange = (event) => {
    setAge(event.target.value);
    GlobalState.setIsSelect(true);
  };

  const handleChangeDate = (event) => {
    setdateTime(event);
    GlobalState.setIsDate(true);
  };
  const getEvents = async () => {
    fetch("http://localhost:8787/appointments").then(r => (r.json().then(rr => GlobalState.setEvents(rr))));
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  //return
  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h2>  הוספת אירוע</h2>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            />

            <TextField
              id="outlined-multiline-flexible"
              label="תעודת זהות"
              multiline
              value={id}
              maxRows={4}
              onChange={(e) => setId(e.target.value)}
            />

            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            />

            <TextField
              id="outlined-multiline-flexible"
              label="סוג אירוע"
              multiline
              value={serviceType}
              maxRows={4}
              onChange={(e) => setserviceType(e.target.value)}
            /> <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            />
{/*select*/}
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">באיזה שירות תרצו להשתמש?</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  {GlobalState.service.map((x, key) =>
                    <MenuItem value={x.description} key={key}>{x.description}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Box>
{/*datePicker*/}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker label="בחר שעה ותאריך"
                  value={dateTime}
                  onChange={(newDate) => handleChangeDate(newDate)}
                />
              </DemoContainer>
            </LocalizationProvider>

            <TextField
              id="outlined-multiline-flexible"
              label="שם לקוח"
              multiline
              value={clientName}
              maxRows={4}
              onChange={(e) => setclientName(e.target.value)}
            /> <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            />

            <TextField
              id="outlined-multiline-flexible"
              label="טלפון"
              multiline
              value={clientPhone}
              maxRows={4}
              onChange={(e) => setclientPhone(e.target.value)}
            />
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            />

            <TextField
              id="outlined-multiline-flexible"
              label="מייל"
              multiline
              value={clientEmail}
              maxRows={4}
              onChange={(e) => setclientEmail(e.target.value)}
            />
            <button onClick={toShow} >ok</button>
          </Box>
          {/* {!GlobalState.isOkDate && <Alert severity="error">we dont available at this time</Alert>} */}

        </Modal>
      </div>
      {/* <img src="../../public/logo.png" alt="תיאור של התמונה" />   */}

      <h1>User</h1>
      <Detailsview />
      <Services />
      <br></br>
      <Fab color="error" onClick={handleOpen} aria-label="add">
      <AddIcon/> 
      </Fab>
      <h2> ☝להזמנת שירות👆</h2>
    </>
  )
})
export default User
