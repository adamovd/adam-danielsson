import {FilterIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const navigationItemType = defineType({
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  icon: FilterIcon as React.ComponentType,
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Navigation Text',
    }),
    defineField({
      name: 'navigationItemUrl',
      type: 'link',
      title: 'Navigation Item URL',
    }),
  ],
})
