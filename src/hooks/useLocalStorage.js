import { useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored === null ? initialValue : JSON.parse(stored)
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      if (value === null) localStorage.removeItem(key)
      else localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Storage can be unavailable or full; the current preview still works.
    }
  }, [key, value])

  return [value, setValue]
}
