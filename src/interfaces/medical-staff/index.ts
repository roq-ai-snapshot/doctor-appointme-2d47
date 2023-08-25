import { AppointmentInterface } from 'interfaces/appointment';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface MedicalStaffInterface {
  id?: string;
  specialization: string;
  experience?: number;
  qualification?: string;
  availability?: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    appointment?: number;
  };
}

export interface MedicalStaffGetQueryInterface extends GetQueryInterface {
  id?: string;
  specialization?: string;
  qualification?: string;
  availability?: string;
  user_id?: string;
  organization_id?: string;
}
