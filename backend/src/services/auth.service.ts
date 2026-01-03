import { prisma } from "@/lib/prisma";
import { SignUpInput, LoginInput } from "@/types/auth.types";
import argon2 from "argon2";

export async function signUpUser(input: SignUpInput) {
  const { email, password, fname, lname } = input;
  const userExists = await prisma.user.findUnique({
    where: { email },
  });

  if (userExists) throw new Error("User already exists");

  const hasEdu = email.endsWith(".edu");
  if (!hasEdu) throw new Error("Email must be a valid .edu address");

  const hashedPassword = await argon2.hash(password, { type: argon2.argon2id });
  const name = `${fname} ${lname}`;

  const newUser = await prisma.user.create({
    data: {
      email,
      password_hash: hashedPassword,
      name,
    },
  });

  return newUser;
}

export async function loginUser(input: LoginInput) {
  const { email, password } = input;

  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) throw new Error("Invalid email or password");

  const isPasswordValid = await argon2.verify(
    user.password_hash,
    password
  );
  if (!isPasswordValid) throw new Error("Invalid email or password");

  return user;
}
