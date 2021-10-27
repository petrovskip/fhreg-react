import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilHome,
  cilClipboard,
  cilFolder,
  cilSettings,
} from '@coreui/icons'
import {  CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Case',
    to: '/case',
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Records',
    to: '/records',
    icon: <CIcon icon={cilFolder} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Preferences',
    to: '/prefernces',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  }
]

export default _nav