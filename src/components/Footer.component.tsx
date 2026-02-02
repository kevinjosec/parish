import { Heading, Paragraph, Subheading } from "@kevinjosec/typekit";
import LogoComponent from "./Logo.component";
import { contacts } from "../constants";

export default function FooterComponent() {
  return (
    <div className="p-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col py-8">
          <div className="">
            <LogoComponent />
          </div>
          <div className="flex flex-col gap-4">
            {contacts.map((tab) => (
              <div key={tab.id} className="flex flex-col gap-1">
                <Subheading children={tab.label} />
                <Paragraph
                  children={tab.value}
                  className="font-light"
                  size="sm"
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className="
    md:col-span-2
    rounded-2xl
    border border-white/10
    bg-neutral-900
    p-6
    flex flex-col gap-3
    shadow-lg shadow-black/40
    transition-all duration-300
    hover:shadow-xl hover:-translate-y-1
  "
        >
          <Heading children="About Us" />
          <Paragraph children="St.Mary's Jacobite Syrian Church was established in 2004 to serve the spiritual growth of the Jacobite Syrian Orthodox Community in the state of Kuwait area and to witness our Lord Jesus Christ through the work as a parish." />
        </div>
      </div>
    </div>
  );
}
