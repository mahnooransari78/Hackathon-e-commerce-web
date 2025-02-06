import { NextResponse } from 'next/server';
import { clerkClient } from '@clerk/clerk-sdk-node'; 

export async function GET() {
  try {
    const users = await clerkClient.users.getUserList(); 
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
