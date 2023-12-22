'use client'

import { CategoryContext } from "@/context/CategoryContext"
import { useContext } from "react"

const Category = ({cat}:any) => {
  const {category, changeCategory}=useContext(CategoryContext)
  return (
    <div 
      onClick={()=>changeCategory(cat.attributes.Title)} 
      className={`${
          cat.attributes.Title===category
          ? "bg-[#ffffff] text-black"
          : "bg-[#afa000]"
        } p-4 rounded-lg shadow-md cursor-pointer`}>
      {cat.attributes.Title}
    </div>
  )
}

export default Category