import { useEffect } from 'react';
import { observer } from 'mobx-react';
import AdminMain from './AdminMain';
import GlobalState from '../store/GlobalState';
import Login from './Login';

//chek the Entrance to admin
const Admin = (observer(() => {
    //at the Enterance update business details
    useEffect(() => {
        GlobalState.initBusiness();
    },)
    //return
    return (
        <>
            {
                !GlobalState.isLogin ?
                    <Login /> :
                    <AdminMain />
            }
        </>
    )
}))
export default Admin
