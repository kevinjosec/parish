import AboutComponent from "../components/About.component";
import CommitteeComponent from "../components/Committee.component";
import FooterComponent from "../components/Footer.component";
import LocationsComponent from "../components/Locations.component";
import NavbarComponent from "../components/Navbar.component";
import TimingComponent from "../components/Timing.component";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <NavbarComponent />
      </div>
      <div>
        <AboutComponent />
      </div>
      <div>
        <LocationsComponent />
      </div>
      <div>
        <TimingComponent />
      </div>
      <div>
        <CommitteeComponent />
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}
