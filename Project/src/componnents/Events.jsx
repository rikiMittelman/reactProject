import { observer } from "mobx-react";
import { useState, useEffect } from "react"
import GlobalState from "../store/GlobalState";
import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import './DetailsDesign.css';
//component that contain all the event list (for admin & user)
const Events = observer(() => {
    //useStates
    const [id, setId] = useState(GlobalState.events.id);
    const [serviceType, setserviceType] = useState(GlobalState.events.serviceType);
    const [dateTime, setdateTime] = useState(GlobalState.events.dateTime);
    const [clientName, setclientName] = useState(GlobalState.events.clientName);
    const [clientPhone, setclientPhone] = useState(GlobalState.events.clientPhone);
    const [clientEmail, setclientEmail] = useState(GlobalState.events.clientEmail);
    const [arr, setArr] = useState([])
    const [sortedArray, setSortedArray] = useState([])
    //at Entrance update the first event and get list of events
    useEffect(() => {
        GlobalState.postEvents({ id: GlobalState.events[0].id, serviceType: GlobalState.events[0].serviceType, dateTime: GlobalState.events[0].dateTime, clientName: GlobalState.events[0].clientName, clientPhone: GlobalState.events[0].clientPhone, clientEmail: GlobalState.events[0].clientEmail }).then(
            getEvents());

    }, [])
    //functions
    //function that color the events according to date
    const colorEvent = (event) => {
        const today = new Date();
        const datemeeting = new Date(event);
        const timeDiff = Math.abs(datemeeting.getTime() - today.getTime())
        const diffDay = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        if (diffDay < 0)
            return 'non'
        else
            if (diffDay === 1) {
                return 'red';
            }
            else if (diffDay <= 7) {
                return 'orange'
            }
            else {
                return 'green'
            }
    }

  //get from the server events list  
    const getEvents = async () => {
        const response = await fetch("http://localhost:8787/appointments");
        const data = await response.json();
        data.sort((a, b) => {
            return new Date(a.dateTime) - new Date(b.dateTime)
        })
        setArr(data);
        GlobalState.setEvents(data);
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
                {
                    <div id="theEvents">
                        {GlobalState.events.map((x1, key) => (//איפה שמים את ה-key
                            <>

                                <div className='oneEvent' key={x1.id} >
                                    <div>{x1.id}</div>
                                    <div>{x1.serviceType}</div>
                                    <div className={colorEvent(x1.dateTime)}>{x1.dateTime}</div>
                                    <div>{x1.clientName}</div>
                                    <div>{x1.clientPhone}</div>
                                    <div>{x1.clientEmail}</div>
                                </div>

                            </>
                        ))}</div>
                }
            </CardContent>
            <CardActions>
            </CardActions>
        </React.Fragment >

    )
    //return
    return (
        <>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
            </Box>
            {!GlobalState.isAdmin && <AddEvent />}
        </>)
})
export default Events