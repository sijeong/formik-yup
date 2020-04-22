import * as yup from 'yup';

// export type Person = {
//   firstName: string;
//   nickName: string | null;
//   email?: string | null;
//   birthDate: Date;
// };

const personSchema = yup.object({
  firstNane: yup.string(),
  nickName: yup.string().nullable(),
  email: yup.string().nullable().notRequired().email(),
  birthDate: yup.date().nullable().notRequired().min(new Date(1900, 0, 1)),
});

type Person = yup.InferType<typeof personSchema>;

export const validationSchema = yup.object().shape({
  email: yup.string().email().required('Required'),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/(?=.*[0-9])/, 'Password must contain a number'),
});

export const articleSchema = yup.object().shape({
  title: yup
    .string()
    .required()
    .min(5, 'Title is too short - should be 5 chars minimum.'),
  content: yup.string().required().min(10, ''),
});
