"use client";
import Chat from "@/app/components/Chat";
import { useAppSelector } from "@/app/store/store";

const LogoutPage = () => {
  const { selfData } = useAppSelector((state) => state.auth);
  return (
    <div className="flex">
      <h1>{selfData?.description || 'testing'}</h1>
      <Chat />
    </div>
  );
};

export default LogoutPage;
