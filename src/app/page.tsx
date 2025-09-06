import { PageContainer } from "~/components/common";
import { ContactSubSection } from "~/components/ContactSubSection";
import { ExperienceSubSection } from "~/components/ExperienceSubSection";
import { SkillsSubSection } from "~/components/SkillsSubSection";

export default function Home() {
  return (
    <div className="">
      <ExperienceSubSection />
      <SkillsSubSection />
      <ContactSubSection />
      <p>footer footer footer</p>
    </div>
  );
}
