import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="http://manu.edu.mk/" target="_blank" rel="noopener noreferrer">
          MANU
        </a>
        <span className="ms-1">&copy; 2021 FH Reg.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)