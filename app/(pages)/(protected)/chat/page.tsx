"use client";
import { useLogoutMutation } from "@/app/features/auth/authService";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Chat from "@/app/components/Chat";

const LogoutPage = () => {
  const { mutate: logout, isSuccess, isError } = useLogoutMutation();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push("auth/login");
    }
  }, [isSuccess, router]);


  return <Chat />;


}

export default LogoutPage;
