import MenuDesktopTwo from "../components/MenuDesktopTwo";
import HeaderDesktop from "../components/HeaderDesktop";

const Desktop = () => {
  return (
    <div className="d-flex flex-row">
      {/*   <MenuDesktop position="col-2" /> */}
      <MenuDesktopTwo />
      <HeaderDesktop />
      <div>jw</div>
    </div>
  );
};

export default Desktop;
