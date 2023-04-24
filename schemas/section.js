import { TbSection as icon } from 'react-icons/tb';

export default {
    name: 'section',
    title: 'General Sections with Image and Content',
    type: 'document',
    icon,
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        { 
            name: 'content', 
            title: 'Content', 
            type: 'array',
            of: [{type: 'block'}]
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
    ],
    preview: {
        select: {
          title: 'title',
        },
      },
  }