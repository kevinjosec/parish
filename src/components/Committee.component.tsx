import { Heading, Paragraph } from "@kevinjosec/typekit";

export default function CommitteeComponent() {
  return (
    <div className="p-4 flex flex-col gap-4 max-w-7xl mx-auto">
      <Heading children="Committee Members" />
      <div>
        <Paragraph children="The newly updated committee members list will be out soon." />
      </div>
    </div>
  );
}
