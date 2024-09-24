import logo from "../../../assets/Group.svg";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const UniversityList = ({ message }) => {
  return (
    <motion.div
      className="max-w-xs pl-1 lg:pl-2 flex items-start"
      initial={{ scale: 0, x: -300, y: 100 }}
      animate={{ scale: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <img className="w-[35px] mr-1  rounded-full p-[2px]"
        src={logo}
        alt=""
      />

      <div>
        <p className={`mb-2     mr-auto bg-white text-black    rounded-lg p-2 `}>{message?.botResponse?.fulfillmentMessages[0].text.text[0]}</p>
        {message?.botResponse?.fulfillmentMessages[1]?.payload &&
          <div className=" ">
            {parseFloat(message?.queryText) >= 3.0 ? (
              <div
                className={`flex flex-col  mr-auto bg-white text-black border-[1px] border-black     rounded-lg p-2 `}
              >
                {message?.botResponse?.fulfillmentMessages[1]?.payload.fields.cards.listValue.values
                  .filter(
                    (uniVal) =>
                      uniVal.structValue.fields.rank
                        .stringValue == "high"
                  )
                  .map((value, index) => (
                    <Link
                      target="blank"
                      to={
                        value?.structValue.fields.link
                          ?.stringValue
                      }
                      className="bg-blue-100 hover:bg-blue-800 hover:text-white p-2 rounded-xl"
                      key={index}
                    >
                      {
                        value.structValue.fields.header
                          .stringValue
                      }
                      <span>
                        {" "}
                        {value.structValue.fields
                          .description
                          ? value.structValue.fields
                            .description.stringValue
                          : ""}
                      </span>
                    </Link>
                  ))}
              </div>
            ) : (
              <div
                className={`flex flex-col gap-1 mr-auto bg-white text-black border-[1px] border-black   rounded-lg p-2 `}
              >
                {message?.botResponse.fulfillmentMessages[1].payload.fields.cards.listValue.values
                  .filter(
                    (uniVal) =>
                      uniVal.structValue.fields.rank
                        .stringValue == "low"
                  )
                  .map((value, index) => (
                    <Link
                      target="blank"
                      to={
                        value.structValue.fields.link
                          .stringValue
                      }
                      className="bg-blue-100 hover:bg-blue-800 hover:text-white p-2 rounded-xl"
                      key={index}
                    >
                      {
                        value.structValue.fields.header
                          .stringValue
                      }
                      <span>
                        {" "}
                        {value.structValue.fields
                          .description
                          ? value.structValue.fields
                            .description.stringValue
                          : ""}
                      </span>
                    </Link>
                  ))}
              </div>
            )}
          </div>
        }
      </div>

    </motion.div>
  );
};

export default UniversityList;