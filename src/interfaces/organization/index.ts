import { AppointmentInterface } from 'interfaces/appointment';
import { ItSupportInterface } from 'interfaces/it-support';
import { MedicalStaffInterface } from 'interfaces/medical-staff';
import { OfficeManagerInterface } from 'interfaces/office-manager';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  appointment?: AppointmentInterface[];
  it_support?: ItSupportInterface[];
  medical_staff?: MedicalStaffInterface[];
  office_manager?: OfficeManagerInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
    it_support?: number;
    medical_staff?: number;
    office_manager?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
