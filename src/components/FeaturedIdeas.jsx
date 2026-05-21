import React from 'react';
import IdeaCard from './IdeaCard';
import { fetchFeaturedIdeas } from '@/lib/data';


const FeaturedIdeas = async() => {
    const ideas = await fetchFeaturedIdeas()
    return (
        <div className='container my-15 mx-auto'>
          <h3 className='font-bold text-center text-blue-500 text-4xl mb-7 mt-10'> Featured Ideas</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    ideas?.map(idea => <IdeaCard idea={idea} key={idea?._id} />)
                }
            </div>
        </div>
    );
};

export default FeaturedIdeas;