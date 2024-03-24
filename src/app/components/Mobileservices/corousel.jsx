import * as React from "react"
import { CardBody, Stack, Heading, Text } from "@chakra-ui/react"
import { Card, CardContent, } from "../../../../@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../../@/components/ui/carousel"

import Image from "next/image"
export default function Corousel(props) {
    return (

        <Carousel className="w-full lg:max-w-xs  min-h-56 ">
            <CarouselContent dir="ltr">
                {Array.from({ length: 5 }).map((_, index) => (
                    <>
                        <React.Fragment key={index}>
                            <CarouselItem className="min-w-72 scroll-ps-6 snap-x ...">
                                <div className="p-0">
                                    <Card className="border-0">
                                        <CardContent className="flex flex-col items-center justify-start rounded-lg px-4">
                                            <Image src={props.beforephoto1} className="w-52 sm:w-72 h-36 hover:shadow-lg hover:shadow-orange-500 transition-all duration-300 rounded-lg" />
                                            <div className="flex flex-wrap flex-col w-52 sm:w-72">
                                                <Heading size="md" className="mt-2">BEFORE</Heading>
                                                <p className="overflow-hidden">{props.beforedescription1}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="min-w-72 scroll-ps-6 snap-x ...">
                                <div className="p-0">
                                    <Card className="border-0">
                                        <CardContent className="flex flex-col items-center justify-start rounded-lg px-4">
                                            <Image src={props.afterphoto1} className="w-52 sm:w-72 h-36 hover:shadow-lg hover:shadow-orange-500 transition-all duration-300 rounded-lg" />
                                            <div className="flex flex-wrap w-52 sm:w-72 flex-col">
                                                <Heading size="md" className="mt-2">AFTER</Heading>
                                                {console.log(props.afterdescription1)}
                                                <p className="overflow-hidden">{props.afterdescription1}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="min-w-72 scroll-ps-6 snap-x ...">
                                <div className="p-0">
                                    <Card className="border-0">
                                        <CardContent className="flex flex-col items-center justify-start rounded-lg px-4">
                                            <Image src={props.beforephoto2} className="w-52 sm:w-72 h-36 hover:shadow-lg hover:shadow-orange-500 transition-all duration-300 rounded-lg" />
                                            <div className="flex flex-wrap w-52 sm:w-72 flex-col">
                                                <Heading size="md" className="mt-2">BEFORE</Heading>
                                                {console.log(props.beforedescription2)}
                                                <p className="overflow-hidden">{props.beforedescription2}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="min-w-72 scroll-ps-6 snap-x ...">
                                <div className="p-0">
                                    <Card className="border-0">
                                        <CardContent className="flex flex-col items-center justify-start rounded-lg px-4">
                                            <Image src={props.afterphoto2} className="w-52 sm:w-72 h-36 hover:shadow-lg hover:shadow-orange-500 transition-all duration-300 rounded-lg" />
                                            <div className="flex flex-wrap w-52 sm:w-72 flex-col">
                                                <Heading size="md" className="mt-2">AFTER</Heading>
                                                {console.log(props.afterdescription2)}
                                                <p className="overflow-hidden">{props.afterdescription2}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        </React.Fragment>
                        
                    </>
                ))}
            </CarouselContent>

        </Carousel>

    )
}

