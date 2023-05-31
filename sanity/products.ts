import { title } from "process";
import { defineType, defineField } from "sanity";

export const products = defineType({
  name: "products",
  type: "document",
  title: "Product",

  fields: [
    defineField({
      name: "title",
      title: "Product Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Product Description",
      type: "string",
    }),

    defineField({
      name: "price",
      title: "Product Price",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
    }),
    defineField({
        name: "category",
        title: "Product catagory",
        type: "reference",
        to:[
            {
                type:"category"
            }
        ]
      }),
  ],
});
