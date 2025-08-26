import { PageContainer } from "~/components/common";

export default function Home() {
  return (
    <div className="">
      <PageContainer pageHeader="">
        <p>cool graphic here - branch rule should pass and create deploy for preview - now here's an addition for the feature that shouldn't deploy</p>
      </PageContainer>
    </div>
  );
}
