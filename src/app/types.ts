export type ContactProps = {
    name: string,
    email: string,
    service: string,
    message: string
}

export type ServiceProps = {
    title: string,
    desc: string,
    img: string,
    points: string
}

export type BlogProps = {
    id?: string,
    title: string,
    content: string,
    blogImg: string,
    date: string
}

export type PaginationProps = { totalCount: number, pageSize: number, siblingCount: number, currentPage: number }