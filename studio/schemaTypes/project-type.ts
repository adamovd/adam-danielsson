import {ProjectsIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: ProjectsIcon as React.ComponentType,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Cover Image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Project URL',
      description: 'Link to the project, if applicable',
    }),
    defineField({
      name: 'githubUrl',
      type: 'url',
      title: 'GitHub URL',
      description: 'Link to the GitHub repository, if applicable',
    }),
    defineField({
      name: 'date',
      type: 'date',
      title: 'Completion Date',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured Project',
      description: 'Mark this project as featured on the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'client',
      type: 'string',
      title: 'Client',
      description: 'Name of the client or organization for whom the project was completed',
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          {title: 'School Project', value: 'school'},
          {title: 'Work Project', value: 'work'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Technologies Used',
    }),
    defineField({
      name: 'content',
      type: 'pageBuilder',
    }),
  ],
})
