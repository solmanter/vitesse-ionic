import type { HMRPayload } from 'vite'

export type UserModule = (ctx: HMRPayload) => void
