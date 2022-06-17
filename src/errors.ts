// enum errList {
//     route = 'Route not found',
//     uuid = 'User id is invalid',
// }

// export default errList;
export const route = () => {
    throw new Error('Route not found');
};

export const id = () => {
    throw new Error('User id is invalid');
};
