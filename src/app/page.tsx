import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";
import ProductCard from "./ProductCard";

 const getProductData = async () => {
  const res = await client.fetch(`*[_type=="products"]{
   price,
   _id,
   title,
   image,
   category ->{
    name
   }
  }`);
  return res;
};

interface IProduct {
  title: string;
  _id: string;
  description: string;
  image: IImage;
  price: number;
  category: {
    name: string;
  };
}

export default async function Home() {
  const data: IProduct[] = await getProductData();
  return (
    <div className="grid grid-cols-[repeat(3,auto)] justify-center gap-x-10">
      {data.map((item,index) => (
        <div key={index}>
        <ProductCard item={item}/>
        </div>
      ))}
    </div>
  );
}
