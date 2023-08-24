import React from 'react'
import BNACard from '../BNACard/BNACard'
import './BnaList.css'
const BnaList = ({BNALists} ) => {
  return (
    <div  className='List'>
    {BNALists.map(BNAList => <BNACard  BNAList={BNAList}  />)}  

    </div>
  )
}

export default BnaList
