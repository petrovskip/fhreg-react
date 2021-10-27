import React from 'react'

// Views
const Home = React.lazy(() => import('./views/Home'))
const Case = React.lazy(() => import('./views/Case'))
const Records = React.lazy(() => import('./views/Records'))
const Preferences = React.lazy(() => import('./views/Preferences'))

const routes = [
    { path: '/home', exact: true, name: 'Home', component: Home },
    { path: '/case', name: 'Case', component: Case, exact: true },
    { path: '/records', name: 'Records', component: Records, exact: true },
    { path: '/preferences', name: 'Preferences', component: Preferences, exact: true }
]

export default routes