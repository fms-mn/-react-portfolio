import { useEffect, useState } from 'react'

const DATABASE = 'benedict-portfolio'
const STORE = 'profile'
const KEY = 'uploaded-photo'

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE, 1)
    request.onupgradeneeded = () => request.result.createObjectStore(STORE)
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

async function readPhoto() {
  const database = await openDatabase()
  return new Promise((resolve, reject) => {
    const request = database.transaction(STORE).objectStore(STORE).get(KEY)
    request.onsuccess = () => resolve(request.result || null)
    request.onerror = () => reject(request.error)
  }).finally(() => database.close())
}

async function writePhoto(value) {
  const database = await openDatabase()
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE, 'readwrite')
    if (value) transaction.objectStore(STORE).put(value, KEY)
    else transaction.objectStore(STORE).delete(KEY)
    transaction.oncomplete = resolve
    transaction.onerror = () => reject(transaction.error)
  }).finally(() => database.close())
}

export function useProfileImage() {
  const [image, setImageState] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    readPhoto().then(setImageState).catch(() => {}).finally(() => setReady(true))
  }, [])

  const setImage = async (value) => {
    setImageState(value)
    await writePhoto(value)
  }

  return { image, setImage, ready }
}
