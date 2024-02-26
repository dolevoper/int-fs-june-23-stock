import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'localhost',
});

export async function getLocations() {
  const result = await apiClient.get<{ locations: { name: string }[] }>(
    '/locations'
  );

  return [...result.data.locations];
}
