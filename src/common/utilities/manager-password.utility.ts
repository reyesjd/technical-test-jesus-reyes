import * as bcrypt from 'bcrypt';

export function createHashPassword(password: string): string {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
}

export function comparePassword(
  password: string,
  hashedPassword: string,
): boolean {
  const saltRounds = 10;
  return bcrypt.compareSync(hashedPassword, password);
}
