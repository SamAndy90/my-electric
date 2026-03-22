import { cache } from 'react'

import { client } from '../payload-client'

export const getService = cache(async ({ slug }: { slug?: string }) => {
  if (!slug) return null

  const result = await client.find({
    collection: 'service',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
