import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const fetchSingleIdea = async (id,token) => {
     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas/${id}`,{
        headers: {
            authorization: token || ''
        }
     })
        const data = res.json()
        return data || {}
}

const IdeaDetailPage = async({params}) => {
    const {id} = await params;
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token)
    const idea = await fetchSingleIdea(id,token)
    const {
    title,
    detailedDescription,
    imageURL,
     category,
     targetAudience,
    
  } = idea;
    return (
        <div className='container  my-20 mx-auto'>
            <div className='flex  p-5 rounded-2xl text-white  bg-[#1A1A2E] gap-5'>
           <div>
            
                    {" "}
                    <Image
                      src={imageURL}
                      width={450}
                      height={450}
                      alt="card image"
                      className="object-cover transform transition duration-700 group-hover:scale-105 rounded-xl"
                    />
                
           </div>
           <div className='flex-1 space-y-2.5'>
            <h1 className='text-5xl font-bold text-blue-500'>{title}</h1>
            <h3 className='font-semibold '>Category : <span className='text-blue-500 font-bold'>{category}</span></h3>
            <p className='text-gray-400'>{detailedDescription}</p>
            <p>Target Audience For Your Service : <span className='text-gray-400'>{targetAudience}</span></p>
           </div>
        </div>
        </div>
    );
};

export default IdeaDetailPage;