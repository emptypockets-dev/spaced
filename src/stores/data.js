import { writable } from 'svelte-local-storage-store';

export const projects = writable('projects', {
  projects: [
    {
      title: 'Learn Javascript',
      cards: [
        {
          title: 'Object Destructuring',
          embed_slug: 'object-destructuring-wg01q',
          level: 1,
          level_name: 'level one',
          question: 'How do you unpack a property from an object and assign it to a variable with',
          lastReview: null
        },
        {
          title: 'JS Nullish Coalescing',
          embed_slug: 'object-destructuring-wg01q',
          level: 1,
          level_name: 'level one',
          question: 'How do you evaluate default options if not undefined or null?',
          lastReview: null
        },
        {
          title: 'Javascript IIFE',
          embed_slug: 'object-destructuring-wg01q',
          level: 1,
          level_name: 'level one',
          question: 'How do you make function calls right away in their own scope?',
          lastReview: null
        },
        {
          title: 'Array - Remove by index',
          embed_slug: 'object-destructuring-wg01q',
          level: 1,
          level_name: 'level one',
          question: 'How do you remove items from an array using their index?',
          lastReview: null
        },
        {
          title: 'Array - Remove by filter',
          embed_slug: 'object-destructuring-wg01q',
          level: 1,
          level_name: 'level one',
          question: 'How do you create a new array with only the values you want to keep?',
          lastReview: null
        },
        {
          title: 'Rest Parameters',
          embed_slug: 'object-destructuring-wg01q',
          level: 1,
          level_name: 'level one',
          question: 'How do you modify this function to accept any number of arguments? ',
          lastReview: null
        },
        {
          title: 'Array Destructuring',
          embed_slug: 'object-destructuring-wg01q',
          level: 1,
          level_name: 'level one',
          question: 'How do you grab the id and name in one line using array destructuring?',
          lastReview: null
        }
      ]
    },
    {
      title: 'Learn Something else',
      cards: [
        {
          title: 'Object Destructuring',
          embed_slug: 'object-destructuring-wg01q',
          level: 1,
          level_name: 'level one',
          question: 'How do you unpack a property from an object and assign it to a variable with'
        },
        {
          title: 'JS Nullish Coalescing',
          embed_slug: 'object-destructuring-wg01q',
          level: 1,
          level_name: 'level one',
          question: 'How do you evaluate default options if not undefined or null?'
        },
        {
          title: 'Javascript IIFE',
          embed_slug: 'object-destructuring-wg01q',
          level: 1,
          level_name: 'level one',
          question: 'How do you make function calls right away in their own scope?'
        },
        {
          title: 'Array - Remove by index',
          embed_slug: 'object-destructuring-wg01q',
          level: 1,
          level_name: 'level one',
          question: 'How do you remove items from an array using their index?'
        },
        {
          title: 'Array - Remove by filter',
          embed_slug: 'object-destructuring-wg01q',
          level: 1,
          level_name: 'level one',
          question: 'How do you create a new array with only the values you want to keep?'
        }
      ]
    }
  ]
});
