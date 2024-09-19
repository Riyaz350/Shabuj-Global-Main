import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Single_Universty_Accordion from "../../../Pages/Single_University/Single_Universty_Accordion";
import Single_University_Check from "../../../Pages/Single_University/Single_University_Check";
import Single_University_Info from "../../../Pages/Single_University/Single_University_Info";
import Single_University_Form from "../../../Pages/Single_University/Single_University_Form";
import Single_University_Banner from "../../Single_University_Components/Single_University_Banner";

const HomeSingleUniversity = () => {
  const { id } = useParams();
  const [university, setUniversity] = useState({});
  useEffect(() => {
    fetch("/universities_json/allUni.json")
      .then((response) => response.json())
      .then((data) => {
        const singleUniversity = data.find((uni) => uni.id === parseInt(id));
        setUniversity(singleUniversity);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="mb-20 pb-20">
      <Single_University_Banner university={university} />
      <div className="max-w-7xl mx-auto">
        <p className="text-center md:text-6xl text-4xl font-semibold md:mt-36 mt-28 md:mx-0 mx-5">
          {university.name}
        </p>
        <div className="md:grid md:grid-cols-12 grid-cols-1 mt-8 md:mt-12 gap-10 px-5">
          <div className="lg:col-span-7 col-span-6">
            <Single_Universty_Accordion />
            <Single_University_Check />
          </div>
          <div className="lg:col-span-5 col-span-6">
            <Single_University_Info />
            <Single_University_Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSingleUniversity;
