import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'cyber-future-store-boetilu3',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_OLWmTiHHdnoUhGDJyu0xEIu_3p4U1Yw8',
  authRequired: false,
  auth: { mode: 'managed' },
})
