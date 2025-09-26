import { TbIconsFilled } from "react-icons/tb";

export default function WIP() {
  return (
    <div className="flex flex-col w-full h-96 justify-center items-center gap-10">
      <TbIconsFilled className="size-20 animate-spin [animation-duration:4s]" />
      <p className="text-lg bg-gradient-to-r from-pink-300 to-blue-800 bg-clip-text text-transparent font-medium">
        Work in progress, check back soon!
      </p>
    </div>
  );
}
