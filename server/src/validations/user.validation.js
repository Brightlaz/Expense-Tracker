const z = require('zod');

const userUpdateSchema = z.object({
    fullName: z.string().optional(),
    avatar: z.string().optional(),
    phoneNumber: z.number().int().optional(),
    occupation: z.string().optional(),
    salary: z.number().int().optional(),
    saving: z.number().int().optional(),
    goal: z.number().int().optional(),
});

module.exports = { userUpdateSchema };