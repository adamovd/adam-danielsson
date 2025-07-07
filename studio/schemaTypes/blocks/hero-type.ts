import {PresentationIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  type: 'object',
  fields: [
    defineField({
      name: 'body',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [{type: 'textColor'}, {type: 'highlightColor'}],
          },
        },
      ],
    }),
    defineField({
      name: 'verticalPosition',
      type: 'string',
      title: 'Vertical Position',
      options: {
        list: [
          {title: 'Top', value: 'start'},
          {title: 'Center', value: 'center'},
          {title: 'Bottom', value: 'end'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'horizontalPosition',
      type: 'string',
      title: 'Horizontal Position',
      options: {
        list: [
          {title: 'Left', value: 'start'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'end'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  icon: PresentationIcon as React.ComponentType,
  preview: {
    select: {
      media: 'image',
    },
    prepare({media}) {
      return {
        title: 'Hero',

        media: media ?? PresentationIcon,
      }
    },
  },
})
