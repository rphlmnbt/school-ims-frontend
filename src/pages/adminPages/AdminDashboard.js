import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AdminDashboardHome from './AdminDashboardHome'

function AdminDashboard() {

    return (
        <>
            <Router>
                <Switch>
                    <AdminDashboardHome />
                </Switch>
            </Router>
        </>
    )
}

export default AdminDashboard