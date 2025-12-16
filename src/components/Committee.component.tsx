import { Heading, Paragraph } from "@kevinjosec/typekit";

export default function CommitteeComponent() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <Heading children="Committee Members" />
      <div>
        <Paragraph children="The committee members are listed below." />
      </div>
    </div>
  );
}
