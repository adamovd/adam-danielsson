import {ImagesIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  icon: ImagesIcon as React.ComponentType,
  fields: [
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }),
          ],
        }),
      ],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'display',
      type: 'string',
      title: 'Display as',
      description: 'How should we display these images?',
      options: {
        list: [
          {title: 'Stacked on top of eachother', value: 'stacked'},
          {title: 'In-line', value: 'inline'},
          {title: 'Carousel', value: 'carousel'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'zoom',
      type: 'boolean',
      title: 'Zoom enabled',
      description: 'Should we enable zooming of images?',
    }),
  ],
  preview: {
    select: {
      images: 'images',
      image: 'images.0',
    },
    prepare(selection: Record<string, any>) {
      let count = 0
      if (Array.isArray(selection.images)) {
        count = selection.images.length
      } else if (selection.images) {
        count = 1
      }
      return {
        title: `${count} Gallery image${count === 1 ? '' : 's'}`,
        media: selection.image,
      }
    },
  },
})
