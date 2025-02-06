
import Sidebar from "@/app/admin-dashbord/sidebar/page";

export default function Layout({ children }: { children: React.ReactNode }) {
 
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100 min-h-screen">{children}</main>
     
    </div>
  );
}
