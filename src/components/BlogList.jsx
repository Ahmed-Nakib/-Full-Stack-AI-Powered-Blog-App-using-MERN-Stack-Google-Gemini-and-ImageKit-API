import React from 'react'
import{blogCategories} from '../assets/assets'

const BlogList = () => {
    const [menu, setMenu] = React.useState("ALL");
  return (
    <div>
      <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
        {blogCategories.map((Item) => (
            <div key={Item} className='relative'>
                <button onClick={() => setMenu(Item)}
                    className={`cursor-pointer text-gray-500 ${menu === Item && 'text-white px-4 pt-0.5'}`}>
                    {Item}
                    {menu === Item && (
                         <div className='absolute left-0 right-0 top-0 h-7 -z-10 bg-primary rounded-b-full'></div>
                    )}
                   
                </button>
            </div>
        ))}
      </div>
      <div>

      </div>
    </div>
  )
}

export default BlogList
