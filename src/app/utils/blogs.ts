import { cache } from 'react'
import { headers, revalidate } from "./configs"
import { prepareResponse } from './helpers'

const getAll = cache(async () => {
    const res = await fetch('/api/blog', {
        method: 'GET',
        headers,
        next: { tags: ['blogs'], revalidate }
    })

    return prepareResponse(res)
})

const getById = cache(async (id: string) => {
    const res = await fetch('/api/blog/'+id, {
        method: 'GET',
        headers,
        next: { tags: ['blog'], revalidate }
    })

    return prepareResponse(res)
})

const getRecent = cache(async (query: object) => {
    const res = await fetch('/api/blog?'+query, {
        method: 'GET',
        headers,
        next: { tags: ['recent-blog'], revalidate }
    })

    return prepareResponse(res)
})

const blogServices = {
    getAll,
    getById,
    getRecent
}

export default blogServices