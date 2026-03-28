import type { CollectionConfig } from 'payload'

import { SEO } from './SEO'
import { revalidatePage } from './hooks/revalidatePage'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    SEO,
  ],
  hooks: {
    afterChange: [revalidatePage],
  },
}
