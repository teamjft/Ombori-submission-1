import axios from 'axios';

const serverUrl = 'https://reqres.in';

const apiFetchUser = `${serverUrl}/api/users?page=`;

export default async function fetchUserList(params) {
  try {
    const response = await axios.get(apiFetchUser + params);
    return response.data;
  } catch (error) {
    return { error };
  }
}
