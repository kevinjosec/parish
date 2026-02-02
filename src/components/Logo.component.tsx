import { Heading, Paragraph } from "@kevinjosec/typekit";
import logo from "../../public/logo.png";

export default function LogoComponent() {
  return (
    <div className="flex flex-row items-center gap-4">
      <img src={logo} alt="SMJSC Logo" className="w-16 h-16" />

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
