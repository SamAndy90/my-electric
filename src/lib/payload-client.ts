import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const client = await getPayload({
  config: configPromise,
})
