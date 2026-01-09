import { Link } from "react-router-dom";
import PageTitle from "@/components/PageTitle";
import { useAuth } from '@/context/AuthContext.jsx';
export default function Dashboard() {
  const { isAuthenticated } = useAuth();
  console.log("isAuthenticated?.user?._id:", isAuthenticated?.user)
  return (
    <>
      <PageTitle title="Dashboard" channel="DropClone Admin" />

      <div className="w-full max-w-md mx-auto">
        hi
      </div>
    </>
  );
}
