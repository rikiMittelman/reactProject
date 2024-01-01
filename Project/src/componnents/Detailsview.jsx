import { useState, useEffect } from 'react'
import * as React from 'react';
import GlobalState from '../store/GlobalState';
import { observer } from 'mobx-react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import './DetailsDesign.css'
//business details to show
const Detailsview = observer(() => {
  //useStates
  const [id, setId] = useState(GlobalState.business.id);
  const [name, setName] = useState(GlobalState.business.name);
  const [address, setAddress] = useState(GlobalState.business.address);
  const [phone, setPhone] = useState(GlobalState.business.phone);
  const [logo, setLogo] = useState(GlobalState.business.logo);
  const [description, setDescription] = useState(GlobalState.business.description);



  //at Entrance get the business Details from the server and init the props
  useEffect(() => {
    const getDetails = async () => {
      const response = await fetch("http://localhost:8787/businessData");
      const data = await response.json();
      setId(data.id);
      setName(data.name);
      setAddress(data.address);
      setPhone(data.phone);
      setLogo(data.logo);
      setDescription(data.description);
    }
    getDetails();
  }, [])

  //send to edit bussines details component
  const toEdit = () => {
    GlobalState.sentToEdit(true);
  }
  //card that contain all business details
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(8.0)' }}
    >
      •
    </Box>
  );

  const card = (
    <React.Fragment>
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
            label="ID"
            multiline
            focused
            maxRows={1}
            InputProps={{
              readOnly: true
            }}
            defaultValue={id}
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
            focused
            maxRows={1}
            InputProps={{
              readOnly: true
            }}
            defaultValue={name}

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
            focused
            maxRows={1}
            InputProps={{
              readOnly: true
            }}
            defaultValue={address}

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
            focused
            maxRows={1}
            InputProps={{
              readOnly: true
            }}
            defaultValue={phone}

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
            focused
            maxRows={1}
            InputProps={{
              readOnly: true
            }}
            defaultValue={logo}

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
            focused
            maxRows={1}
            InputProps={{
              readOnly: true
            }}
            defaultValue={description}
          /></div>
      </CardContent>
      <CardActions>
        {GlobalState.isAdmin && <Button size="small" onClick={toEdit}>עריכה</Button>}
      </CardActions>
    </React.Fragment>
  )
  //return
  return (
    <>

      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </>
  )
})
export default Detailsview
