import { TbIconsFilled } from "react-icons/tb";

export default function WIP() {
  return (
    <div className="flex h-96 w-full flex-col items-center justify-center gap-10">
      <TbIconsFilled className="size-20 animate-spin [animation-duration:4s]" />
      <p className="bg-gradient-to-r from-pink-300 to-blue-800 bg-clip-text text-lg font-medium text-transparent">
        Work in progress, check back soon!
      </p>
    </div>
  );
}
