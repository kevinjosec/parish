import { Heading } from "@kevinjosec/typekit";
import { serviceSchedule } from "../constants";

export default function TimingComponent() {
  return (
    <div className="overflow-x-auto p-4 flex flex-col gap-4">
      <Heading children="Service Schedule" />
      <table className="w-full border-collapse rounded-xl overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Day</th>
            <th className="p-4 text-left">Location</th>
            <th className="p-4 text-left">Service</th>
            <th className="p-4 text-left">Time</th>
          </tr>
        </thead>

        <tbody>
          {serviceSchedule.map((day, dayIndex) =>
            day.services.map((service, serviceIndex) => (
              <tr
                key={`${dayIndex}-${serviceIndex}`}
                className="border-b last:border-none"
              >
                {/* Show day only once per group */}
                <td className="p-4 font-medium">
                  {serviceIndex === 0 ? day.day : ""}
                </td>
                <td className="p-4">{service.location}</td>
                <td className="p-4">{service.type}</td>
                <td className="p-4">{service.time}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
