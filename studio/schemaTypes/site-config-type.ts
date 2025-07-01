import {CogIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const siteConfigType = defineType({
  name: 'siteConfig',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon as React.ComponentType,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Site title',
    }),
    defineField({
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
    }),
    defineField({
      name: 'frontpage',
      type: 'reference',
      description: 'Choose page to be the frontpage',
      to: {type: 'page'},
    }),
    defineField({
      title: 'Main navigation',
      name: 'mainNav',
      description: 'Select menu for main navigation',
      type: 'reference',
      to: {type: 'navigation'},
    }),
    defineField({
      title: 'Social navigation',
      name: 'socialNav',
      description: 'Select menu for social navigation',
      type: 'reference',
      to: {type: 'navigation'},
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
