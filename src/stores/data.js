import { writable } from 'svelte-local-storage-store';

export const projects = writable('projects', {
  projects: [
    {
      title: 'Learn Javascript',
      cards: [
        {
          title: 'Object Destructuring',
          embed_slug: 'dyRJepX',
          level: 1,
          level_name: 1,
          question: 'How do you unpack a property from an object and assign it to a variable with'
        },
        {
          title: 'JS Nullish Coalescing',
          embed_slug: 'powpKpy',
          level: 1,
          level_name: 1,
          question: 'How do you evaluate default options if not undefined or null?'
        },
        {
          title: 'Javascript IIFE',
          embed_slug: 'PojEaQg',
          level: 1,
          level_name: 1,
          question: 'How do you make function calls right away in their own scope?'
        },
        {
          title: 'Array - Remove by index',
          embed_slug: 'rNwpKKm',
          level: 1,
          level_name: 1,
          question: 'How do you remove items from an array using their index?'
        },
        {
          title: 'Array - Remove by filter',
          embed_slug: 'jOwYKvq',
          level: 1,
          level_name: 1,
          question: 'How do you create a new array with only the values you want to keep?'
        }
      ]
    },
    {
      title: 'Learn Something else',
      cards: [
        {
          title: 'Object Destructuring',
          embed_slug: 'dyRJepX',
          level: 1,
          level_name: 'level one',
          question: 'How do you unpack a property from an object and assign it to a variable with'
        },
        {
          title: 'JS Nullish Coalescing',
          embed_slug: 'powpKpy',
          level: 1,
          level_name: 'level one',
          question: 'How do you evaluate default options if not undefined or null?'
        },
        {
          title: 'Javascript IIFE',
          embed_slug: 'PojEaQg',
          level: 1,
          level_name: 'level one',
          question: 'How do you make function calls right away in their own scope?'
        },
        {
          title: 'Array - Remove by index',
          embed_slug: 'rNwpKKm',
          level: 1,
          level_name: 'level one',
          question: 'How do you remove items from an array using their index?'
        },
        {
          title: 'Array - Remove by filter',
          embed_slug: 'jOwYKvq',
          level: 1,
          level_name: 'level one',
          question: 'How do you create a new array with only the values you want to keep?'
        }
      ]
    }
  ]
});
