// 'use client';
// import { useEffect } from 'react';
// import { useUser } from '@clerk/nextjs';
// import { useRouter } from 'next/navigation';

// export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
//   const { user, isSignedIn } = useUser();
//   const router = useRouter();

//   useEffect(() => {
//     if (isSignedIn && user) {
//       const email = user?.primaryEmailAddress?.emailAddress; // Email ko fetch kiya
//       console.log('User Email:', email); // Debug ke liye
      
//       if (email === 'mahnooransari147@gmail.com') {
//         router.push('/admin-dashboard'); 
//       }
//       // Regular users ko website par rehne dena
//     }
//   }, [isSignedIn, user, router]);

//   return <>{children}</>;
// }
