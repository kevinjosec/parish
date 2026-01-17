import { Heading, Subtitle } from "@kevinjosec/typekit";
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
            className="border-2 px-4 py-8 my-4 flex flex-row justify-between items-center"
          >
            <div className="flex flex-row items-start gap-4">
              <Calendar color="#0066FF" />
              <div className="flex flex-col gap-4">
                <Heading children={services.day} size="2xl" />
                <Subtitle
                  children={`${services.day} at ${services.location} ${services.type}`}
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Clock color="gray" />
              <Subtitle children={services.time} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
