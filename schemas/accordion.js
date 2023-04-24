import { AiFillQuestionCircle as icon } from 'react-icons/ai';

export default {
    name: 'accordion',
    title: 'Display of Cuts Available',
    type: 'document',
    icon,
    fields: [
        {
          name: 'category',
          title: 'Section of Cut',
          type: 'string',
          description: 'The section of the cattle that the cut comes from',
        },
        { 
            name: 'cut', 
            title: 'Cuts from this Section', 
            type: 'reference',
            of: [{type: 'cuts'}]
        }
    ],
    preview: {
        select: {
          title: 'category',
        },
      },
  }