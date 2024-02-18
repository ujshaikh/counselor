import { cache } from 'react'
import { headers, revalidate } from "./configs"
import { prepareResponse } from './helpers'

const getAll = cache(async () => {
    const res = await fetch('/api/gallery', {
        method: 'GET',
        headers,
        next: { tags: ['blogs'], revalidate }
    })

    return prepareResponse(res)
})

const galleryServices = {
    getAll
}

export default galleryServices