import { PageContainer } from "~/components/common";
import { ExperienceSubSection } from "~/components/ExperienceSubSection";
import { SkillsSubSection } from "~/components/SkillsSubSection";

export default function Home() {
  return (
    <div className="">
      <ExperienceSubSection />
      <SkillsSubSection />
    </div>
  );
}
