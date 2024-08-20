import { Link } from "react-router-dom";
import UK from "../../../assets/Flags/UK Flag.svg";
import USA from "../../../assets/Flags/USA Flag.svg";
import Australia from "../../../assets/Flags/Australia Flag.svg";
import Germany from "../../../assets/Flags/Germany Flag.svg";
import Canada from "../../../assets/Flags/Canada Flag.svg";
import NZ from "../../../assets/Flags/Newzealand Flag.svg";
import UAE from "../../../assets/Flags/UAE.jpg";
import Georgia from "../../../assets/Flags/Georgia.png";
import Finland from "../../../assets/Flags/Finland.png";
import Cyprus from "../../../assets/Flags/Cyprus.png";
import Switzerland from "../../../assets/Flags/Switzerland.png";
import France from "../../../assets/Flags/France.png";
import WestIndies from "../../../assets/Flags/West-Indies.jpg";
import { FaGlobeAmericas } from "react-icons/fa";
const Event_Study = () => {
  const flagClass =
    "flex mx-auto flex-1 flex-col justify-center item-center text-center my-2 lg:mt-10";
  const flag = "w-3/4 mx-auto rounded-lg ";
  return (
    <div className="max-w-screen-xl mx-auto mt-10 mb-20 md:mt-20 md:mb-28 lg:mt-28 lg:mb-40">
      <h1 className="text-[24px] md:text-[56px] font-bold text-center mb-5">
        Study in Your Dream Country
      </h1>
      {/* <ul className="px-3 lg:px-0 text-center grid grid-cols-3 gap-y-5 md:grid-cols-7 mt-10 text-xs lg:text-lg font-medium text-[#4B4B4B]">
        <li>UK</li>
        <li>USA</li>
        <li>AUSTRALIA</li>
        <li>CANADA</li>
        <li>GERMANY</li>
        <li>NEW ZEALAND</li>
        <li>Switzerland</li>
        <li>France</li>
        <li>Finland</li>
        <li>UAE</li>
        <li>Cyprus</li>
        <li>Georgia</li>
        <li>West Indies</li>
        <li>Rest of the World</li>
      </ul> */}
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 items-baseline max-w-7xl mx-auto">
          <Link className={flagClass} to={"/UK"}>
            <img htmlFor="my-drawer-4" className={flag} src={UK} />
            <li>Study in UK</li>
          </Link>
          <Link className={flagClass} to={"/USA"}>
            <img className={flag} src={USA} />
            <li></li>
            <li>Study in USA</li>
          </Link>
          <Link className={flagClass} to={"/Australia"}>
            <img className={flag} src={Australia} />
            <li>Study in Australia</li>
          </Link>
          <Link className={flagClass} to={"/Canada"}>
            <img className={flag} src={Canada} />
            <li>Study in Canada</li>
          </Link>
          <Link className={flagClass} to={"/Germany"}>
            <img className={flag} src={Germany} />
            <li>Study in Germany</li>
          </Link>
          <Link className={flagClass} to={"/New-Zealand"}>
            <img className={flag} src={NZ} />
            <li>Study in New Zealand</li>
          </Link>
          <Link className={flagClass} to={"/UAE"}>
            <img className={flag} src={UAE} />
            <li>Study in UAE</li>
          </Link>
          <Link className={flagClass} to="/Georgia">
            <img className={flag} src={Georgia} />
            <li>Study in Georgia</li>
          </Link>
          <Link className={flagClass} to={"/Finland"}>
            <img className={flag} src={Finland} />
            <li>Study in Finland</li>
          </Link>
          <Link className={flagClass} to={"/Cyprus"}>
            <img className={flag} src={Cyprus} />
            <li>Study in Cyprus</li>
          </Link>
          <Link className={flagClass} to={"/Switzerland"}>
            <img className={flag} src={Switzerland} />
            <li>Study in Switzerland</li>
          </Link>
          <Link className={flagClass} to={"/France"}>
            <img className={flag} src={France} />
            <li>Study in France</li>
          </Link>
          <Link className={flagClass} to={"/West-Indies"}>
            <img className={flag} src={WestIndies} />
            <li>Study in West-Indies</li>
          </Link>
          <Link>
            <div className={flagClass}>
              <div className="mx-auto">
                <FaGlobeAmericas size={50} className="mx-auto" />
              </div>
              <div>
                <li>Rest of the World</li>
              </div>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Event_Study;
