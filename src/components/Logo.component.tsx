import { Heading, Paragraph } from "@kevinjosec/typekit";

export default function LogoComponent() {
  return (
    <div className="flex flex-row items-center gap-4">
        <div className="rounded-full p-4 bg-blue-100">
            <Paragraph children="SM" size="lg" className="font-bold text-blue-600" />
        </div>
      <div>
        <Heading children="ST MARY'S" size="xl" className="tracking-wider" />
        <Paragraph
          children="JACOBITE SYRIAN CHURCH"
          size="md"
          className="font-semibold tracking-wider"
        />
      </div>
    </div>
  );
}
