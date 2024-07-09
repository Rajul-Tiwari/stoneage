"use client"
import React, { useEffect, useState } from 'react'
import { notFound, useParams } from 'next/navigation'
import { Details, Explore, Homecrousel } from '@/components'
import Collaborator from '@/components/collaborator'
import { workPageDataWithId } from '@/constant'

function Page() {
    const params = useParams();
    const pathname = params.name;
    
    const [currentData, setCurrentData] = useState();
    // useEffect(() => {
    // if (pathname) {
    const data = workPageDataWithId?.find((data) => data.name === pathname);
    if(!data){
       notFound();
    }
    // setCurrentData(data)
    // }
    // }, []);
    console.log(data, "data");
    return (
        <div>
            <Homecrousel color={true} hideText={true} />
            <Collaborator data={data} />
            <Details />
            <Explore data={data} />


        </div>
    )
}

export default Page
