import { Heading, Paragraph } from "@kevinjosec/typekit";
import { ABOUT_CONTENT, ABOUT_FOOTER } from "../constants";

export default function AboutComponent() {
  return (
    <div className="p-6 flex flex-col gap-6 bg-gray-50">
      {/* Page Title */}
      <Heading>About Us</Heading>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ABOUT_CONTENT.map(({ title, text }) => (
          <div
            key={title}
            className="
              rounded-2xl border border-gray-200 bg-white p-6
              flex flex-col gap-3
              shadow-sm
              transition-all duration-300
              hover:shadow-md hover:-translate-y-1
            "
          >
            <Heading size="xl">{title}</Heading>
            <Paragraph>{text}</Paragraph>
          </div>
        ))}

        {/* Full width footer card */}
        <div
          className="
            md:col-span-2
            rounded-2xl border border-gray-200 bg-white p-6
            flex flex-col gap-3
            shadow-sm
            transition-all duration-300
            hover:shadow-md hover:-translate-y-1
          "
        >
          <Heading size="xl">{ABOUT_FOOTER.title}</Heading>
          <Paragraph>{ABOUT_FOOTER.text}</Paragraph>
        </div>
      </div>
    </div>
  );
}
