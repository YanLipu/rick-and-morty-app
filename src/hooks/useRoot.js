import { getCurrentInstance } from '@vue/composition-api'

export function useRoot() {
  const root = getCurrentInstance().proxy

  return { root }
}
