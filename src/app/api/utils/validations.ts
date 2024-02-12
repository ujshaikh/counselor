import joi from 'joi';

const contact = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    service: joi.string().allow(null),
    message: joi.string().allow(null)
})

const blogPost = joi.object({
    title: joi.string().required(),
    content: joi.string().required()
})

const validation = {
    contact,
    blogPost
}

export default validation