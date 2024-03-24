import React from 'react'
import { Card, CardHeader, CardBody, Stack, Heading, Text } from '@chakra-ui/react'
// import  {Image } from '@chakra-ui/react'
import Image from 'next/image'
import Corousel from "./corousel"
const Corouselcard = (props) => {
  return (
    <Card className='hover:shadow-lg w-full   '>
        <CardBody >
        {console.log(props.afterdescription1)}
          <Corousel 
          beforephoto1={props.beforephoto1}
          beforedescription1={props.beforedescription1}
          afterphoto1={props.afterphoto1}
          afterdescription1={props.afterdescription1}
          beforephoto2={props.beforephoto2}
          beforedescription2={props.beforedescription2}
          afterphoto2={props.afterphoto2}
          afterdescription2={props.afterdescription2}


          />
        </CardBody>

      </Card>
  )
}

export default Corouselcard
