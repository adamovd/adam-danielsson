import {FilterIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const navigationType = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: FilterIcon as React.ComponentType,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'navId',
      type: 'slug',
      title: 'Navigation Id',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'isMain',
      type: 'boolean',
      title: 'Is Main Navigation',
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Navigation items',
      of: [{type: 'navigationItem'}],
    }),
  ],
})
