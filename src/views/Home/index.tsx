import { SocialMedias, UserContact } from "../../constants/HomeInfo";
import ProfilePic from "./ProfilePic";

const HomePage = () => {
  return (
    <div className="flex size-full justify-center font-bold gap-4  items-center">
      <div className="border p-4  w-[540px] h-[476px]">
        <div className="bg-blue-400  rounded-tl-3xl rounded-r-3xl w-fit px-4 py-2 ">
          <p>Hello I'm</p>
        </div>

        <p className="pt-6 text-6xl">Nelson Katwal</p>
        <p className="my-12 mt-4 text-4xl">Frontend Developer</p>
        <div className="flex flex-col mb-10">
          {UserContact.map((data, index) => (
            <div className="mb-6">
              <ul className="flex items-center gap-4" key={index}>
                <li>
                  <data.Icon />
                </li>
                <li>{data.value}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="flex gap-10">
          {SocialMedias.map((data, index) => (
            <div key={index}>
              <li className="list-none">
                <data.Icon />
              </li>
            </div>
          ))}
        </div>
      </div>
      <ProfilePic />
    </div>
  );
};

export default HomePage;
