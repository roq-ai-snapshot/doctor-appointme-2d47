import * as yup from 'yup';

export const itSupportValidationSchema = yup.object().shape({
  expertise: yup.string().required(),
  availability: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
