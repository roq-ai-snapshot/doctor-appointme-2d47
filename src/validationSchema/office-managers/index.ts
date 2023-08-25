import * as yup from 'yup';

export const officeManagerValidationSchema = yup.object().shape({
  responsibility: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
