import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'




async function getBlog(pageId:number) {
  const options={
    headers:{
      Authorization:`Bearer ${process.env.STR_API_TOKEN}`
    }
  }
  try{
    const res=await fetch(`http://127.0.0.1:1337/api/blogs/${pageId}?populate=*`,options)
    const response=await res.json()
    return response
  }catch(e) {
    console.log(e)
  }
}




const Blog = async ({params}:any) => {
  const blog=await getBlog(params.id)

  const imageUrl='http://127.0.0.1:1337'+blog.data.attributes.img.data.attributes.url
  
  console.log(blog.data.attributes.createdAt)
  
  const tmpDate=0
  return (
    <div className='max-w-3xl mx-auto p-4'>
      <Link href='/'>{"< Back"}</Link>
      <div className='relative w-full h-96 overflow-hidden rounded-lg mt-5'>
        <Image layout='fill' objectFit='cover' src={imageUrl} alt={''}/>
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold">
          {blog.data.attributes.Title}
        </h1>
        <p className="text-gray-600 mt-2">
          <BlocksRenderer content={blog.data.attributes.Description}  />
        </p>
        <div className="mt-4 flex items-center">
          <span className="text-sm">
            Published on {new Date(blog.data.attributes.publishedAt).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  )
}
// 57:11
// ecakmak91@gmail.com 
// 4112874Ec.
//https://www.youtube.com/watch?v=g5UiXp4AbeE&t=588s

export default Blog