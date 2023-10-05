import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [card , setCard] = useState([]);
    useEffect( () => {
        const loadData = async() => {
            const URL = `https://openapi.programming-hero.com/api/ai/tools`;
            const res = await fetch(URL);
            const data = await res.json();
            setCard(data.data.tools);
        };
        loadData()
    } , []);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 gap-12'>
            {
                card?.map(singleData => <SingleData 
                singleData={singleData} key={singleData.id}></SingleData>)
            }
        </div>
    );
};

export default Card;