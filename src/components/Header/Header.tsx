import logo from "/src/assets/header-logo.svg";
import search from "/src/assets/search.svg";

export default function Header() {
  return (
    <div className="hstack gap-3">
      <img src={logo} alt="company-logo" width={130} height={60} />
      <div className="d-flex align-items-center gap-2 py-3 px-2 border  rounded-pill w-100 h-100">
        <img src={search} alt="Search-icon" />
        <p className="m-0">Поиск...</p>
      </div>
    </div>
  );
}
