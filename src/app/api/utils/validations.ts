import joi from 'joi';

const contact = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    service: joi.string().allow(null),
    message: joi.string().allow(null)
})

const blogPost = joi.object({
    title: joi.string().required(),
    content: joi.string().required(),
    blogImg: joi.string().allow(null)
})

const login = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
})

const validation = {
    contact,
    blogPost,
    login
}

export default validation