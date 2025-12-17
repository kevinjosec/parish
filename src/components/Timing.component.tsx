import { Heading } from "@kevinjosec/typekit";
import { serviceSchedule } from "../constants";

export default function TimingComponent() {
  return (
    <div className="p-4 flex flex-col gap-8">
      {/* Page Title */}
      <Heading children="Service Schedule" />

      {/* Day Cards */}
      {serviceSchedule.map((day, dayIndex) => (
        <div
          key={dayIndex}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4"
        >
          {/* Day Heading */}
          <Heading children={day.day} size="xl" />

          {/* Services */}
          <div className="flex  text-center flex-col gap-3">
            {day.services.map((service, serviceIndex) => (
              <div
                key={serviceIndex}
                className="
                  rounded-xl
                  bg-white/10
                  p-4
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-2
                  hover:bg-white/15
                  transition
                "
              >
                {/* Service Info */}
                <div className="flex flex-col gap-1">
                  <div className="font-medium">{service.type}</div>
                  <div className="text-sm opacity-70">{service.location}</div>
                </div>

                {/* Time */}
                <div className="font-semibold whitespace-nowrap">
                  {service.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}