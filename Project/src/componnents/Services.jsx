import { observer } from "mobx-react";
import { useState, useEffect } from "react";
import GlobalState from "../store/GlobalState";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddService from './AddService'
import './DetailsDesign.css'
//component that contain all the services list (for admin & user)
const Services = observer(() => {
    //useStates
    const [id, setId] = useState(GlobalState.service.id);
    const [name, setName] = useState(GlobalState.service.name);
    const [description, setDescription] = useState(GlobalState.service.description);
    const [price, setPrice] = useState(GlobalState.service.price);
    const [duration, setDuration] = useState(GlobalState.service.duration);
    const [expanded, setExpanded] = React.useState(false);
    const [arr, setArr] = useState([]);
      //at Entrance update service and get services list 
    useEffect(() => {
        GlobalState.postServices({ id: GlobalState.service[0].id, name: GlobalState.service[0].name, description: GlobalState.service[0].description, price: GlobalState.service[0].price, duration: GlobalState.service[0].duration }).then(
           getServices());
    }, [])
    //functions
    const getServices = async () => {
        const response = await fetch("http://localhost:8787/services");
        const data = await response.json();
        GlobalState.setServices(data);
    }
//on click to show more about the service
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    //return
    return (
        <>
            <h1>Services</h1>
<div id="service">
            {GlobalState.service.map((x, key) =><>
            
                { x.id !="" ?  <>
                       <Card sx={{ maxWidth: 345 }} id="card">
                           <CardHeader
                               avatar={
                                   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                       {x.duration}
                                   </Avatar>
                               }
                               action={
                                   <IconButton aria-label="settings">
                                       <MoreVertIcon />
                                   </IconButton>
                               }
                               title={x.description}
                               subheader="שמחים לתת לכם שירות"
                           />
   
                           <CardContent>
   
                           </CardContent>
                           <CardActions disableSpacing>
                               <IconButton aria-label="add to favorites">
                                   <FavoriteIcon />
                               </IconButton>
                               <IconButton aria-label="share">
                                   <ShareIcon />
                               </IconButton>
                               <ExpandMore
                                   expand={expanded}
                                   onClick={handleExpandClick}
                                   aria-expanded={expanded}
                                   aria-label="show more"
                               >
                                   <ExpandMoreIcon />
                               </ExpandMore>
                           </CardActions>
                           <Collapse in={expanded} timeout="auto" unmountOnExit>
                               <CardContent>
                                   <Typography paragraph>קרא עוד עלי</Typography>
                                   {x.price}
                                   {x.description}
   
                               </CardContent>
                           </Collapse>
                       </Card>
                       <br></br>
                       <br></br>
                   </> :<></>}
            </>
            )}
            </div>
            {GlobalState.isAdmin && <AddService />}
        </>)
})
export default Services 
