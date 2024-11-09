import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export async function loginAction(data: z.infer<typeof loginSchema>): Promise<string> {
  const parsedData = loginSchema.safeParse(data);
  if (!parsedData.success) {
    throw new Error(parsedData.error.issues.map((issue) => issue.message).join(', '));
  }

  // Mock server-side logic
  const { email, password } = parsedData.data;

  if (email === 'user@example.com' && password === 'password123') {
    return 'Login successful!';
  }

  throw new Error('Invalid email or password');
}
