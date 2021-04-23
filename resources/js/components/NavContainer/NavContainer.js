import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SideBar from '../SideBar/Sidebar';
import Header from '../Header/Header'
import AgentView from '../../pages/Agent/AgentView'
import UserRegister from '../UserRegister/UserRegister';
import Dashboard from '../Dashboard/Dashboard';
import TicketList from '../TicketList/TicketList';
import UserList from '../UserList/UserList';
import ReportContainer from '../ReportContainer/ReportContainer';

const NavContainer = () => {
    const [navActive, setNavActive] = useState(false)
    const [permiso, setPermiso] = useState(true)

    const handleNav = () => setNavActive(!navActive)

    return (
        <div>
        <Router>
            {permiso && 
                <>
                <Header handleNav={handleNav} />
                <SideBar show={navActive} />
                </>
            }
            <Switch>
                <Route exact path='/admin'>
                    <UserRegister />
                </Route>
                <Route exact path='/dashboard'>
                    <Dashboard />
                </Route>
                <Route path='/reports'>
                    <ReportContainer />
                </Route>
                <Route path='/ticket'>
                    <TicketList />
                </Route>
                <Route path='/admin/users' >
                    <UserList />
                </Route>
                <Route component={AgentView}/>
            </Switch>
        </Router>
        </div>
    );
}

export default NavContainer;