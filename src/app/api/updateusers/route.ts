
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req: { method: string; body: { email: any; password: any; name: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { id?: number; email?: string; password?: string; name?: string; error?: string; }): void; new(): any; }; }; }) {
//   if (req.method === 'POST') {
//     const { email, password, name } = req.body;

//     try {
//       const user = await prisma.user.create({
//         data: {
//           email,
//           password,
//           name,
//         },
//       });
//       res.status(201).json(user);
//     } catch (error) {
//       res.status(500).json({ error: 'Error creating user' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
}
