import * as React from 'react';
import { useState } from 'react';
import { observer } from 'mobx-react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import GlobalState from '../store/GlobalState';
import './DetailsDesign.css';

//הוספת שירות
const AddService = observer(() =>
{
  //useStates
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");

  //functions

  //onCanghe that update new service details in the server
  const toShow = () => {
    GlobalState.postServices({ id: id, name: name, description: description, price: price, duration: duration }).then(
      r => GlobalState.getServices());
  }
  //variable-card for all services
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(8.0)' }}
    >
      •
    </Box>
  );
  //variable-card for one service
  const card = (
    <React.Fragment>
      <CardContent id="container1">
      </CardContent>
      <TextField
        id="outlined-multiline-flexible"
        label="ID"
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
        label="שם"
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
        label="תאור"
        multiline
        maxRows={4}
        onChange={(e) => setDescription(e.target.value)}
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
        label="מחיר"
        multiline
        maxRows={4}
        onChange={(e) => setPrice(e.target.value)}
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
        label="פרופיל"
        multiline
        maxRows={4}
        onChange={(e) => setDuration(e.target.value)}
      />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      />
      <CardActions>
        {GlobalState.isAdmin && <Button size="small" onClick={toShow}>הוספה</Button>}
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
export default AddService
