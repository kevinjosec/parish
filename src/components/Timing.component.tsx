import { Heading, Paragraph } from "@kevinjosec/typekit";
import { SERVICES } from "../constants";
import { Calendar, Clock } from "lucide-react";

export default function TimingComponent() {
  return (
    <div className="p-4 md:flex md:flex-row">
      <div className="md:w-1/3 md:flex md:justify-center">
        <Heading children="Service Schedule" />
      </div>

      <div className="md:w-2/3">
        {SERVICES.map((services, servicesIndex) => (
          <div
            key={servicesIndex}
            className="border-2 px-1 md:px-4 py-8 my-4 flex flex-row justify-between items-center"
          >
            <div className="flex flex-row items-start gap-2">
              <Calendar color="#0066FF" />
              <div className="flex flex-col gap-2">
                <Heading
                  children={services.day}
                  size="xl"
                  className="font-semibold"
                />
                <Paragraph
                  size="sm"
                  children={`${services.type} | ${services.location} `}
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-2 whitespace-nowrap">
              <Clock color="gray" size={20} />
              <Paragraph size="sm" className="whitespace-nowrap">
                {services.time}
              </Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
