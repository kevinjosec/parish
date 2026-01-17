import { X } from "lucide-react";
import { Label } from "@kevinjosec/typekit";
import { tabs } from "../constants";
import { useNavigate } from "react-router-dom";

type Props = {
  onClose: () => void;
};

export default function MenuComponent({ onClose }: Props) {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-50 bg-white md:hidden">
      <div className="p-4 flex justify-between items-center">
        <Label children="Menu" size="md" className="font-semibold" />
        <X className="cursor-pointer" onClick={onClose} />
      </div>
      <div className="flex flex-col items-center justify-center gap-8 h-[calc(100vh-64px)]">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="cursor-pointer"
            onClick={() => navigate(tab.route)}
          >
            <Label
              size="md"
              className="hover:cursor-pointer hover:underline underline-offset-8"
            >
              {tab.tab}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
