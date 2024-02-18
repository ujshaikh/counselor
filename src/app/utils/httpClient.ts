import blogServices from "./blogs";
import galleryServices from "./gallery";

// const {getBlogs, getBlogById, getRecentBlogs} = blogServices

const httpClient = {
    blogServices,
    galleryServices
}

export default httpClient
