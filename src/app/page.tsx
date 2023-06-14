import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";

export const getProductData = async () => {
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
      {data.map((item,key) => (
        <div>
          <Image
            width={200}
            height={200}
            src={urlForImage(item.image).url()}
            alt="products"
          ></Image>
          <h2>{item.title}$</h2>
          <p>{item.price}$</p>
          <button className="border py-2 px-6 bg-blue-600 text-white rounded">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
