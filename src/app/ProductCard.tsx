"use client"
import Image from 'next/image';
import React, { FC } from 'react'
import { urlForImage } from "../../sanity/lib/image";


const ProductCard: FC<{item:any}> = ({item}) => {


    const handleAddtoCart =async () =>{
        const res=await fetch("/api/cart",{
            method:"POST",
            body:JSON.stringify({
                product_id:item._id
            })
        })

        const result = await res.json()
        console.log(result);
    }
  return (
    <>
          <Image
            width={200}
            height={200}
            src={urlForImage(item.image).url()}
            alt="products"
          />
          <h2>{item.title}$</h2>
          <p>{item.price}$</p>
          <button onClick={handleAddtoCart} className="border py-2 px-6 bg-blue-600 text-white rounded">
            Add to Cart
          </button>
    </>
  )
}

export default ProductCard