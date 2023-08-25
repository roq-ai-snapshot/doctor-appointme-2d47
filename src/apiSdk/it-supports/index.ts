import axios from 'axios';
import queryString from 'query-string';
import { ItSupportInterface, ItSupportGetQueryInterface } from 'interfaces/it-support';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getItSupports = async (
  query?: ItSupportGetQueryInterface,
): Promise<PaginatedInterface<ItSupportInterface>> => {
  const response = await axios.get('/api/it-supports', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createItSupport = async (itSupport: ItSupportInterface) => {
  const response = await axios.post('/api/it-supports', itSupport);
  return response.data;
};

export const updateItSupportById = async (id: string, itSupport: ItSupportInterface) => {
  const response = await axios.put(`/api/it-supports/${id}`, itSupport);
  return response.data;
};

export const getItSupportById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/it-supports/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteItSupportById = async (id: string) => {
  const response = await axios.delete(`/api/it-supports/${id}`);
  return response.data;
};
