import React from 'react'
import { Card, CardHeader, CardBody, CardFooter ,Stack,Heading,Text} from '@chakra-ui/react'
// import  {Image } from '@chakra-ui/react'
import Image from 'next/image'
import kitchen from "../../assets/Kitchens.jpg"

const Cards = (props) => {
  return (
    <Card maxW='sm' maxH="sm" className='hover:shadow-lg hover:shadow-orange-500 transition-all duration-300  '>
  <CardBody >
    <Image
      src={props.src}
      alt='Green double couch with wooden legs'
     
      className='w-full h-36 rounded-lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{props.Heading}</Heading>
      <Text>
        {props.description}
      </Text>
    </Stack>
  </CardBody>
  
</Card>
  )
}

export default Cards
