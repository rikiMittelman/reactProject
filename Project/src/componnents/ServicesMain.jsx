import { Outlet, Link } from "react-router-dom"
////main window  select show services or events for admin
function ServicesMain() {
    //return 
    return (
        <>       
            <h2>ServicesMain</h2>
            <Link to=''></Link>
            <Link to='Services' id="tab1">Services</Link>|
            <Link to='Events' id="tab2">Events</Link>
            <Outlet />
        </>)
}
export default ServicesMain





