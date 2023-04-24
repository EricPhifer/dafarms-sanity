import { BiCarousel as icon } from 'react-icons/bi';

export default {
    name: 'recipes',
    title: 'Recipes',
    type: 'document',
    icon,
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },

        {
            name: 'image', 
            title: 'Background Image', 
            type: 'image',
            options: {
                hotspot: true
            } 
        },
        {
          name: 'alt',
          title: 'Alternative Text for Image',
          type: 'string',
        },
        {
          name: 'source',
          title: 'Credit to the Creator or Owner of the Image',
          type: 'string',
        },
        {
          name: 'ingredients',
          title: 'Ingredient List',
          type: 'array',
          of: [
            { type: 'Ingredients' }
          ],
        },
        { 
            name: 'directions', 
            title: 'Directions', 
            type: 'array',
            of: [{type: 'block'}]
        }
    ],
    preview: {
        select: {
          title: 'title',
        },
      },
  }