import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Sidebar from '../components/sideBarcomponents/Sidebar'

function AdminDashboard() {

    return (
        <>
            <Router>
                <Sidebar />
                <Switch>
                </Switch>
            </Router>
        </>
    )
}

export default AdminDashboard