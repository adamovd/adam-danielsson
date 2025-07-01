import {LinkIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const linkType = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: LinkIcon as React.ComponentType,
  fields: [
    defineField({
      title: 'Internal Link',
      name: 'internalLink',
      description: 'Select pages for navigation',
      type: 'reference',
      to: [{type: 'page'}, {type: 'post'}],
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      description: 'Use fully qualified URLS for external link',
      type: 'url',
    }),
  ],
})
