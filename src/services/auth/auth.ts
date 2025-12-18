import { post } from '../makeRequest';

export const signupUser = async (userData: {
    name: string;
    email: string;
    password: string;
}) => {
    return await post('/auth/signup', userData);
}
