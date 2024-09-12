import Image from "next/image";
import Rating from "@/components/Rating";

export default function Home() {
  return (
    <div className="bg-slate-50 h-screen flex justify-center items-center">
      <Rating />
    </div>
  );
}
