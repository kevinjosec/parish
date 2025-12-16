import AboutComponent from "../components/About.component";
import CommitteeComponent from "../components/Committee.component";
import FooterComponent from "../components/Footer.component";
import LocationsComponent from "../components/Locations.component";
import NavbarComponent from "../components/Navbar.component";
import TimingComponent from "../components/Timing.component";

export default function Home() {
  return (
    <div>
      <div>
        <NavbarComponent />
      </div>
      <div className="h-screen">
        <AboutComponent />
      </div>
      <div className="h-screen">
        <LocationsComponent />
      </div>
      <div className="h-screen">
        <TimingComponent/>
      </div>
      <div className="h-screen">
        <CommitteeComponent/>
      </div>
      <div>
        <FooterComponent/>
      </div>
    </div>
  );
}
