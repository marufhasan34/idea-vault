import IdeaCard from '@/components/IdeaCard';
import {ThunderboltFill} from '@gravity-ui/icons';
import React from 'react';

const fetchIdeas = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas`)
    const data = res.json()
    return data || []
}

const IdeasPage = async() => {
    const ideas = await fetchIdeas()
    console.log(ideas)
    return (
        <div className='container mx-auto'>
            <h3 className='font-bold flex items-center gap-2 text-2xl mb-3 mt-10'><span className='text-blue-500'><ThunderboltFill  /></span> All Ideas</h3>
            <div className='grid my-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
                ideas?.map((idea) => <IdeaCard idea={idea} key={idea?._id} />)
            }
            </div>
        </div>
    );
};

export default IdeasPage;