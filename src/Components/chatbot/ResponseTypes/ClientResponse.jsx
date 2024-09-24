import { motion } from "framer-motion";

const ClientResponse = ({message}) => {
    return (
        <motion.div
            initial={{ scale: 0, x: 100, y: 100 }}
            animate={{ scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`mr-2 ml-auto bg-blue-900 text-white  w-fit my-2 rounded-lg p-2 `}
        >
            {/* {message && loading ? "Typing":  message.clientResponse} */}
            {message?.clientResponse}
        </motion.div>
    );
};

export default ClientResponse;