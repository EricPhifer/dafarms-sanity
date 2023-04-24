import { RiLayoutTop2Line as icon } from 'react-icons/ri';

export default {
    name: 'hero',
    title: 'Hero',
    type: 'document',
    icon,
    fields: [
        {
          name: 'title',
          title: 'Main Title',
          type: 'string',
          description: 'Best to use the name of your business here',
        },
        {
          name: 'tagline',
          title: 'Tagline',
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
            name: 'footerone',
            title: 'First Hero Footer',
            type: 'string',
            description: 'The three most important or highest draw points about your business to your customers',
        },
        {
            name: 'footertwo',
            title: 'Second Hero Footer',
            type: 'string',
            description: 'The three most important or highest draw points about your business to your customers',
        },
        {
            name: 'footerthree',
            title: 'Third Hero Footer',
            type: 'string',
            description: 'The three most important or highest draw points about your business to your customers',
        },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'tagline',
      },
    },
  }