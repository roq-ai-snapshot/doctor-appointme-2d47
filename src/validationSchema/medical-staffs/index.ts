import * as yup from 'yup';

export const medicalStaffValidationSchema = yup.object().shape({
  specialization: yup.string().required(),
  experience: yup.number().integer().nullable(),
  qualification: yup.string().nullable(),
  availability: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
