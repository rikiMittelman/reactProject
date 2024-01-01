import {useState} from 'react'
import GlobalState from '../store/GlobalState'
import Details from './Details'
import ServicesMain from './ServicesMain'
//main window to admin that show the business details and main services and events window
function AdminMain()
{   
    GlobalState.setIsAdmin(true);
    //return
    return(
    <>
    <Details/>
    <ServicesMain/>
    </>
    )
}
export default AdminMain
