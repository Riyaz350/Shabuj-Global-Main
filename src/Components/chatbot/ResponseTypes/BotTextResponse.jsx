import logo from "../../../assets/Group.svg";
import { motion } from "framer-motion";

const BotTextResponse = ({message}) => {
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
          {message?.botResponse?.fulfillmentMessages.length ==
            1 && (
            <div>
              <p
                className={`${message?.user == "user" ? "ml-auto bg-blue-900 text-white w-fit" : "mr-auto   bg-white text-black "}     rounded-lg p-2 `}
              >
                {
                  message?.botResponse?.fulfillmentMessages[0]
                    .text.text[0]
                }
              </p>
            </div>
          ) }
        </motion.div>
      );
};

export default BotTextResponse;