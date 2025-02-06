import { NextResponse, NextRequest } from 'next/server';
import { clerkClient } from '@clerk/clerk-sdk-node';

export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;

  try {
    await clerkClient.users.deleteUser(id);
    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}
