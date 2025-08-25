import React from "react";
import Tag from "@/components/Tag";
import { SkillSections, SkillTag } from "@/data/SkillSectionData";

type Props = {
  sections?: typeof SkillSections;
};

export default function SkillTags({ sections = SkillSections }: Props) {
  return (
    <div className="space-y-7 mt-6">
      {sections.map((section) => (
        <div key={section.title}>
          <h4 className="flex items-center gap-2 text-lg font-bold">
            {section.title}
          </h4>
          <div className="flex gap-2 flex-wrap mt-4">
            {section.skills.map((skill: SkillTag) => (
              <Tag
                key={skill.label}
                icon={skill.icon}
                label={skill.label}
                className="text-xs"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
