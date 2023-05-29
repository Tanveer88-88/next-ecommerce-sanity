import { title } from "process";

export const products={
    name:"products",
    type:"document",
    title:"Product",
    fields:[
        {
            name:"title_id",
            title:"Product Title",
            type:"string",
        },
        {
            name:"description_id",
            title:"Product Description",
            type:"string"
        },
        {
            name:"image_id",
            title:"Product Image",
            type:"image"
        }
    ]

}