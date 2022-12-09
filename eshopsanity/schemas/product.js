export default{
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'array', 
          of: [{ type: 'image' }],
          options: {
            hotspot: true,}
            // hotspot is required to position the image correctly
        },
        {
          name: 'name',
          title: 'Name',
          type:'string',
          },
         {
            name: 'slug',
            title: 'Slug',
            type:'slug',
            options: {
              source: 'name',
              maxLength: 64,
              minLength: 3,
            }
         },
         {
            name: 'price',
            title: 'Price',
            type: 'number',
            
         },
         {
            name: 'description',
            title: 'Description',
            type: 'string',
         } 
        
    ]


};