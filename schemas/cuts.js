import { TbSection as icon } from 'react-icons/tb';

export default {
    name: 'cuts',
    title: 'Cuts of Beef',
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
          name: 'lean',
          title: 'Is it a lean cut?',
          type: 'boolean',
        },
        {
          name: 'marinate',
          title: 'Is it best marinated before cooking?',
          type: 'boolean',
        },
        {
          name: 'grill',
          title: 'Is it good to grill?',
          type: 'boolean',
        },
        {
          name: 'panbroil',
          title: 'Is it good to pan-broil in a skillet?',
          type: 'boolean',
        },
        {
          name: 'stirfry',
          title: 'Is it good to stir-fry?',
          type: 'boolean',
        },
        {
          name: 'indirectgrill',
          title: 'Is it good to indirect grill?',
          type: 'boolean',
        },
        {
          name: 'broil',
          title: 'Is it good to broil?',
          type: 'boolean',
        },
        {
          name: 'braise',
          title: 'Is it good to braise or pot roast?',
          type: 'boolean',
        },
        {
          name: 'roast',
          title: 'Is it good to roast?',
          type: 'boolean',
        },
        {
          name: 'skillet',
          title: 'Is it good for skillet-to-oven?',
          type: 'boolean',
        },
    ],
    preview: {
        select: {
          title: 'title',
        },
      },
  }