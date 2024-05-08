import { motion } from "framer-motion";
import myImage from "./ppppp.jpg";
const ProfilePic = () => {
  return (
    <div className="border w-[540px] h-[476px] flex justify-center items-center">
      <div className=" ">
        <motion.img
          whileHover={{ scale: 2 }}
          whileTap=""
          drag={'x'}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          src={myImage}
          className="size-40 rounded-full "
        />
      </div>
    </div>
  );
};

export default ProfilePic;
