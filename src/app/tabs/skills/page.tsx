import SkillFlip from "@/components/SkillFlip";
import LogoBox from "@/components/LogoBox";

export default function SkillsPage() {
  return (
    <div className="relative flex">
      <div className="sm:ml-8">
        <div className="flex mb-10 items-center gap-4">
          <LogoBox className="place-content-center">
            <SkillFlip />
          </LogoBox>
          <h1 className="text-2xl font-bold">My SuperPowers</h1>
        </div>
      </div>
    </div>
  );
}
