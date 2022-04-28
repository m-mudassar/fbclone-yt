import React from 'react'
import Image from 'next/image'

function SidebarRow({src, Icon, title}) {
  return (
    <div className='flex items-center space-x-2 p-4
     hover:bg-gray-200 rounded-xl cursor-pointer'>
        {src && (
            <Image 
            alt=''
            src={src}
            className="rounded-full"
            width={30}
            height={30}
            layout="fixed"
            />
        )}

        {Icon && (
            <Icon className="h-6 w-8 text-blue-500" />
        )}

        <p className='hidden cursor-pointer sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SidebarRow