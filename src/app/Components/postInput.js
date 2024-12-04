'use client'
import React from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
const PostsInput = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    
    const handleInput=(search)=>{
        const params = new URLSearchParams(searchParams);
        if (search) {
            params.set('q', search);
            replace(`${pathname}?${params.toString()}`);
          } else {
            params.delete('q');
            replace(`${pathname}?${params.toString()}`);
          }
    }
  return (
    <div className='my-5 m-20'>
      <input 
        placeholder='Enter Your Text'
      className='w-full p-3 border border-gray-200 rounded-md ' 
      onChange={(e)=>handleInput(e.target.value)}
      />
    </div>
  )
}

export default PostsInput
