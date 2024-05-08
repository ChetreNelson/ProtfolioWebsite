import React from "react";

const AboutMe = () => {
  return (
    <div className="border p-4  w-[540px] h-[320px] ">
      <div className="">
        <h1 className="text-3xl pb-4 font-semibold">About Me</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi
          ex blanditiis similique facere repudiandae reprehenderit enim
          aspernatur vitae cupiditate quia, libero beatae, dolorum totam quod
          veniam molestiae architecto hic?
        </p>
      </div>
      <button className="border p-2 rounded-md">Download Cv</button>
    </div>
  );
};

export default AboutMe;
