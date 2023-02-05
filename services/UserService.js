import prisma from './DBClient'

const bcrypt = require('bcrypt');
const saltRounds = 10;

const createHash = (password) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
}

/**
 * 
 * @param {*} userEmail 
 * @param {*} userPassword 
 * @returns 
 */
export const findUser = async (userEmail, userPassword) => {
    const user = await findUserWithEmail(userEmail);

    if (!user) {
        throw new Error('User does not exist or invalid password');
    }

    // Check if stored password hash matches a new hash
    const passwordCheck = await bcrypt.compare(userPassword, user.password);

    if (passwordCheck) {
        return user;
    }

    throw new Error('User does not exist or invalid password');
}

/**
 * 
 * @param {String} userEmail 
 * @returns 
 */
export const findUserWithEmail = async (userEmail) => {
    const user = await prisma.user.findFirst({
        where: {
            email: userEmail,
        }
    });

    return user;
}

export const createUser = async (userEmail, userPassword) => {

    // TODO: Modify user to use guid instead of auto increment ID field
    return await prisma.user.create({
        data: {
            email: userEmail,
            password: createHash(userPassword),
        }
    });
}