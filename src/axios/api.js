1export const BASE_URL = `https://chit-fund-backend-evu9.onrender.com/api/v1`;

// admin urls
export const ADMIN_REGISTER = `${BASE_URL}/admin/register`;
export const ADMIN_LOGIN = `${BASE_URL}/admin/login`;
export const GET_PENDING_USERS = `${BASE_URL}/admin/pending-users`;
//  export const APPROVE_PENDING_USER = (id) => `${BASE_URL}/admin/approve-registration/${id}`;
export const APPROVE_PENDING_USER = `${BASE_URL}/admin/approve-registration`; 


export const GET_ALL_USERS = `${BASE_URL}/admin/all-users`;

// user urls
export const USER_REGISTER = `${BASE_URL}/user/register`;
export const USER_LOGIN = `${BASE_URL}/user/login`;
export const GET_USER_PROFILE = `${BASE_URL}/user/profile`;
// export const UPDATE_USER_PROFILE = `${BASE_URL}/user/update-profile`;
