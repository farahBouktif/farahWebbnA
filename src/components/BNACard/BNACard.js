import React from 'react'
import { Button, Card } from 'react-bootstrap'
const BNACard = ({BNAList}) => {
  return (
    
    <div className='cards'>
    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={BNAList.img} />
      <Card.Body>
        <Card.Title>{BNAList.titel}</Card.Title>
        <Card.Text>
       {BNAList.paragraphe}
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  )
}

export default BNACard