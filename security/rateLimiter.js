import rateLimit from 'express-rate-limit'

const time = 1 // in minute
const limit = 5
export const rateLimiter = rateLimit({
	windowMs: time * 60 * 1000,
	max: limit,
	message: `You have exceeded for ${limit} request per hours limit. Please try again after ${time} minutes`,
	headers:true
})

// export default rateLimiter