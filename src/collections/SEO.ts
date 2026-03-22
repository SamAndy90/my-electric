import { Field } from 'payload'

export const SEO: Field = {
  name: 'meta',
  type: 'group',
  label: 'SEO',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'keywords',
      type: 'text',
      label: 'Keywords (comma separated)',
      localized: true,
    },
    {
      name: 'openGraph',
      type: 'group',
      label: 'Open Graph',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'siteName',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
