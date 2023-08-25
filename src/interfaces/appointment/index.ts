import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { MedicalStaffInterface } from 'interfaces/medical-staff';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date: any;
  time: any;
  status: string;
  user_id: string;
  organization_id: string;
  medical_staff_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  medical_staff?: MedicalStaffInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  user_id?: string;
  organization_id?: string;
  medical_staff_id?: string;
}
