import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {simplerColorInput} from 'sanity-plugin-simpler-color-input'
import {presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'
import schema from './schemaTypes'
import {structure} from './src/sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Adam Danielsson Portfolio',

  projectId: '4z0j34ys',
  dataset: 'production',

  plugins: [
    structureTool({structure: structure}),
    presentationTool({
      previewUrl: {
        origin:
          process.env.NODE_ENV === 'production'
            ? 'https://adam-danielsson-ldx8.vercel.app'
            : 'http://localhost:3000',
        preview: '/',
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    visionTool(),
    simplerColorInput({
      defaultColorFormat: 'rgba',
      defaultColorList: [
        {label: 'Light', value: '#FFEBC2'},
        {label: 'Dark', value: '#30323D'},
        {label: 'Green', value: '#009B72'},
        {label: 'Orange', value: '#F58F29'},
        {label: 'Purple', value: '#A4B0F5'},
        {label: 'Custom...', value: 'custom'},
      ],
      enableSearch: true,
    }),
  ],

  schema: {
    types: schema.types,
  },
})
