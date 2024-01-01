import {useState} from 'react'
import GlobalState from '../store/GlobalState';
import DetailsDesign from './DetailsDesign';
import Detailsview from './Detailsview';
import { observer } from "mobx-react"
//in charge of cheking if edit or show details
const Details=(observer(()=>
{
return(
    <>
    <h3>פרטי בעל העסק</h3>
    {GlobalState.edit&&<DetailsDesign postDetails={GlobalState.postDetails} />}
    {!GlobalState.edit&&<Detailsview/>}
    </>   
)

}))
export default Details
