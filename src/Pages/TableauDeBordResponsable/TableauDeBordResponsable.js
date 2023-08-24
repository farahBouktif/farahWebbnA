import React from 'react'
import NavResponsable from '../../components/NavResponsable/NavResponsable'
import Dashboard from '../dashboard/Dashboard'
import './TableauDeBordResponsable.css'
const TableauDeBordResponsable = () => {
  return (
    <div>
      <NavResponsable/>
      <div className='dashhh'>
    <Dashboard/>
    </div>
    </div>
  )
}

export default TableauDeBordResponsable
