import {defineArrayMember, defineType} from 'sanity'

export const pageBuilderType = defineType({
  name: 'pageBuilder',
  type: 'array',
  of: [
    defineArrayMember({type: 'hero'}),
    defineArrayMember({type: 'splitImage'}),
    defineArrayMember({type: 'features'}),
    defineArrayMember({type: 'gallery'}),
    defineArrayMember({type: 'link'}),
    defineArrayMember({type: 'buttonGroup'}),
  ],
})
