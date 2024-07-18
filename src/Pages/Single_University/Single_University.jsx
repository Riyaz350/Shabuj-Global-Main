import Single_University_Banner from "../../Components/Single_University_Components/Single_University_Banner";
import Single_University_Check from "./Single_University_Check";
import Single_University_Form from "./Single_University_Form";
import Single_University_Info from "./Single_University_Info";
import Single_Universty_Accordion from "./Single_Universty_Accordion";

const Single_University = () => {
  return (
    <div>
      <Single_University_Banner />
      <div className="max-w-7xl mx-auto">
        <p className="text-center md:text-6xl text-4xl font-semibold md:mt-36 mt-28 md:mx-0 mx-5">
          University of Aberdeen
        </p>
        <div className="md:grid md:grid-cols-10 grid-cols-1 gap-4 mt-8 md:mt-12">
          <div className="col-span-7">
            <Single_Universty_Accordion />
            <Single_University_Check/>
          </div>
          <div className="col-span-3">
            <Single_University_Info/>
            <Single_University_Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single_University;
