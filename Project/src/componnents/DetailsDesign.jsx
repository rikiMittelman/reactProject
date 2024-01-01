import { useState } from 'react'
import GlobalState from '../store/GlobalState';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './DetailsDesign.css';

//business details to edit
function DetailsDesign({ postDetails }) {
  //useStats
  const [id, setId] = useState(GlobalState.business.id);
  const [name, setName] = useState(GlobalState.business.name);
  const [address, setAddress] = useState(GlobalState.business.address);
  const [phone, setPhone] = useState(GlobalState.business.phone);
  const [logo, setLogo] = useState(GlobalState.business.logo);
  const [description, setDescription] = useState(GlobalState.business.description);
  //render the details
  const rend = () => {
    GlobalState.business.id = id;
    GlobalState.business.name = name;
    GlobalState.business.address = address;
    GlobalState.business.phone = phone;
    GlobalState.business.logo = logo;
    GlobalState.business.description = description;
  }
  //send to show details view component
  const toShow = () => {
    rend();
    postDetails({ id: id, name: name, address: address, phone: phone, logo: logo, description: description });
    GlobalState.sentToEdit(false);
  }

  //card that contain all business details
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  const card = (
    <React.Fragment >
      <CardContent id="container1">
        <div id="box1">
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
            label="שם עסק"
            multiline
            maxRows={4}
            onChange={(e) => setName(e.target.value)}
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
            label="כתובת"
            multiline
            maxRows={4}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div id='box2'>
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
            label="טלפון"
            multiline
            maxRows={4}
            onChange={(e) => setPhone(e.target.value)}
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
            label="לוגו"
            multiline
            maxRows={4}
            onChange={(e) => setLogo(e.target.value)}
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
            label="תאור"
            multiline
            maxRows={4}
            onChange={(e) => setDescription(e.target.value)}
          /></div>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={toShow}>ok</Button>
      </CardActions>
    </React.Fragment>
  );
  //return
  return (
    <>
      <Box sx={{ minWidth: 275 }} id="boxush">
        <Card variant="outlined">{card}</Card>
      </Box>
    </>
  )
}
export default DetailsDesign
