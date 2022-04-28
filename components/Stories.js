import React from 'react'
import StoryCard from './StoryCard'

const stories = [
    {
        name: "Sony Sangha",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v",
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Jef Bezoz",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",
    },
    {
        name: "Mark Zukerberge",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
]

function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
        { stories.map((story) => {
            <StoryCard 
             key={story.src}
             name={story.name}
             src={story.src}
             profile={story.profile} />
        })}
    </div>
  )
}

export default Stories