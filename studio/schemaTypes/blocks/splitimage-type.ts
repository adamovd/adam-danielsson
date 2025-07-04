import {SplitVerticalIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const splitImageType = defineType({
  name: 'splitImage',
  type: 'object',
  fields: [
    defineField({
      name: 'orientation',
      type: 'string',
      options: {
        list: [
          {value: 'imageLeft', title: 'Image Left'},
          {value: 'imageRight', title: 'Image Right'},
        ],
      },
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
  icon: SplitVerticalIcon as React.ComponentType,
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({title, media}) {
      return {
        title: title,
        subtitle: 'Split Image',
        media: media ?? SplitVerticalIcon,
      }
    },
  },
})
