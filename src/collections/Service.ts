import { CollectionConfig } from 'payload'

import { SEO } from './SEO'
import { revalidateService } from './hooks/revalidateService'

export const Service: CollectionConfig = {
  slug: 'service',
  labels: { singular: 'Послуга', plural: 'Послуги' },
  access: {
    read: () => true,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    short_description: true,
    cover_image: true,
  },
  admin: {
    defaultColumns: ['title', 'slug'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Назва послуги',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Назва послуги для URL (англійською, через дефіси)',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'short_description',
      label: 'Короткий опис послуги',
      type: 'text',
      required: true,
    },
    {
      name: 'cover_image',
      label: 'Головне зображення',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    // {
    //   name: 'full_info',
    //   type: 'richText',
    //   label: 'Детальна інформація про послугу',
    // },
    {
      name: 'content',
      label: 'Детальна інформація про послугу',
      type: 'array',
      fields: [
        {
          name: 'blockType',
          label: 'Тип елемента',
          type: 'select',
          required: true,
          defaultValue: 'text',
          options: [
            { label: 'Параграф', value: 'text' },
            { label: 'Медіа', value: 'image' },
          ],
        },
        {
          name: 'text',
          label: 'Текст',
          type: 'array',
          fields: [
            {
              name: 'paragraph',
              type: 'text',
            },
          ],
          admin: {
            condition: (_, data) => data?.blockType === 'text',
          },
        },
        {
          name: 'image',
          label: 'Фото',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData?.blockType === 'image',
          },
        },
      ],
    },
    // {
    //   name: 'gallery',
    //   label: 'Галерея',
    //   type: 'array',
    //   fields: [
    //     {
    //       name: 'image',
    //       label: 'Зображення',
    //       type: 'upload',
    //       relationTo: 'media',
    //     },
    //   ],
    // },
    SEO,
  ],
  hooks: {
    afterChange: [revalidateService],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
