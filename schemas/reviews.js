import { MdRateReview as icon } from 'react-icons/md';

export default {
    name: 'reviews',
    title: 'Review Carousel',
    type: 'document',
    icon,
    fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        { 
            name: 'quote', 
            title: 'Quote', 
            type: 'array',
            of: [{type: 'block'}]
        }
    ],
    preview: {
        select: {
          title: 'name',
          subtitle: 'quote',
        },
      },
  }