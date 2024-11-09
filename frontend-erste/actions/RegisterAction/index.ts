import { z } from 'zod';

const registerSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export async function registerAction(data: z.infer<typeof registerSchema>): Promise<string> {
  const parsedData = registerSchema.safeParse(data);
  if (!parsedData.success) {
    throw new Error(parsedData.error.issues.map((issue) => issue.message).join(', '));
  }

  // Mock server-side logic
  return 'Registration successful!';
}
