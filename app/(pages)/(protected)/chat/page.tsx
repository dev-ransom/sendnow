"use client";
import { useLogoutMutation } from "@/app/features/auth/authService";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LogoutPage = () => {
  const { mutate: logout, isSuccess, isError } = useLogoutMutation();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      // Optional: You can redirect after successful logout
      router.push("auth/login");
    }
  }, [isSuccess, router]);

  return (
    <div>
      <button
        onClick={() => logout()}
        disabled={isSuccess} // Optional: disable button during logout
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        {isSuccess ? "Logging out..." : "Logout"}
      </button>

      {isError && (
        <p className="text-red-500 mt-2">Logout failed. Please try again.</p>
      )}
    </div>
  );
};

export default LogoutPage;
