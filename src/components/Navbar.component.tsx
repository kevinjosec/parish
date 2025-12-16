import { Label } from "@kevinjosec/typekit";
import { tabs } from "../constants";
import LogoComponent from "./Logo.component";
import { Menu } from "lucide-react";
import { useState } from "react";
import MenuComponent from "./Menu.component";

export default function NavbarComponent() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="p-4 flex flex-row justify-between items-center">
      <LogoComponent />
      <div className="hidden md:flex flex-row items-start gap-6">
        {tabs.map((tab) => (
          <div key={tab.id}>
            <Label
              children={tab.tab}
              size="sm"
              className="hover:cursor-pointer hover:underline underline-offset-8 decoration-1"
            />
          </div>
        ))}
      </div>
      <div
        onClick={handleMenu}
        className="block md:hidden hover:cursor-pointer"
      >
        <Menu />
      </div>
      {openMenu && <MenuComponent onClose={handleMenu} />}
    </div>
  );
}
