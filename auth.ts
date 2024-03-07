import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { open, Database } from "sqlite";
import sqlite3 from "sqlite3";


// import { sql } from '@vercel/postgres';
// import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import validation from '@/app/api/utils/validations';
import { NextResponse } from 'next/server';
import { User } from './typings';

let db = null;

async function getUser(email: string): Promise<User | undefined> {
  try {
    db = await open({
        filename: "./collection.db", // Specify the database file path
        driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    })
    const user = await db.get(`SELECT * FROM users WHERE email=${email}`);
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        // const parsedCredentials = z
        //   .object({ email: z.string().email(), password: z.string().min(6) })
        //   .safeParse(credentials);
 
        // if (parsedCredentials.success) {
        //   const { email, password } = parsedCredentials.data;
        //   const user = await getUser(email);
        //   if (!user) return null;
        // }
 
        // return null;
        const { error, value } = validation.contact.validate(credentials)
        if (error) {
            return NextResponse.json({message: 'Failed to login, please try again', error: error.message}, {status: 400})
        }

        const user = await getUser(value.email);
        if (!user) return null;
        const passwordsMatch = await bcrypt.compare(value.password, user.password);

        if (passwordsMatch) return user;
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});