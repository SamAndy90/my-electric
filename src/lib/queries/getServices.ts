import { cache } from 'react'

import { client } from '../payload-client'

export const getServices = cache(async () => {
  const result = await client.find({
    collection: 'service',
    limit: 100,
    pagination: false,
    select: { title: true, short_description: true, cover_image: true, slug: true },
  })

  return result.docs || null
})
