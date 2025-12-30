// components/IconLoader.tsx
import Image from "next/image";
import DeptIcon from "@/public/icons/services/blood-bank.svg"; // koi bhi department icon

export default function IconLoader() {
  return (
    <div className="relative flex h-32 items-end justify-center">
      {/* Pulsating circle */}
      <div className="relative flex h-10 w-10 items-center justify-center">
        <span className="absolute h-full w-full animate-ping rounded-full bg-red-500 opacity-30"></span>
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-200 bg-white p-1">
          {/* Icon inside circle */}
          <Image src={DeptIcon} alt="Department Icon" width={24} height={24} />
        </div>
      </div>
    </div>
  );
}
