import axios from 'axios';
import queryString from 'query-string';
import { OfficeManagerInterface, OfficeManagerGetQueryInterface } from 'interfaces/office-manager';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getOfficeManagers = async (
  query?: OfficeManagerGetQueryInterface,
): Promise<PaginatedInterface<OfficeManagerInterface>> => {
  const response = await axios.get('/api/office-managers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createOfficeManager = async (officeManager: OfficeManagerInterface) => {
  const response = await axios.post('/api/office-managers', officeManager);
  return response.data;
};

export const updateOfficeManagerById = async (id: string, officeManager: OfficeManagerInterface) => {
  const response = await axios.put(`/api/office-managers/${id}`, officeManager);
  return response.data;
};

export const getOfficeManagerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/office-managers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteOfficeManagerById = async (id: string) => {
  const response = await axios.delete(`/api/office-managers/${id}`);
  return response.data;
};
