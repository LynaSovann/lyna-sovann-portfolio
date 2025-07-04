import LayoutPage from "@/components/layout/page-layout";
import ExperiencePageComponent from "@/components/pages/experiences/experiences";

export default function ExperiencesPage() {
  return (
    <LayoutPage
      id="experiences"
      blackTitle="My"
      redTitle="Experiences"
      content={
        <ExperiencePageComponent/>
      }
    />
  );
}
