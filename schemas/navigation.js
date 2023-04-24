import { BsSegmentedNav as icon } from 'react-icons/bs';

export default {
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    icon,
    fields: [
      { 
        name: 'title', 
        title: 'Title for CMS Display', 
        type: 'string' 
      },
      { 
        name: 'logo', 
        title: 'Logo', 
        type: 'image',
        options: {
          hotspot: true
        }
      },
      { 
        name: 'alt', 
        title: 'Alternative Text for Logo', 
        type: 'string' 
      },
      {
        name: 'source',
        title: 'Credit to the Creator or Owner of the Image',
        type: 'string',
      },
      {
        name: 'navlinks',
        title: 'Navigation Links to Sections of the Page',
        type: 'array',
        of: [
          { type: 'PageLinks' }
        ],
      },
      { 
        name: 'primetitle', 
        title: 'Primary Title', 
        type: 'string',
        description: 'This is the one thing that you want every visitor of your site to do. What is the main purpose of your business? Sell? Be contacted? Sign Up? Donate?'
    },
    { 
        name: 'primelink', 
        title: 'Primary Link', 
        type: 'string' 
    },
    ],
  }