import { CollectionConfig } from 'payload'

export const Test: CollectionConfig = {
  slug: 'test',
  labels: { singular: 'Test', plural: 'Tests' },
  fields: [
    {
      name: 'testtext',
      label: 'Test Text',
      type: 'richText',
    },
  ],
}
