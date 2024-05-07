const Navbar = () => {
  const navItems = ["Home", "About", "Skills", "Experiences", "Contact"];
  return (
    <div className="flex mt-4 text-white">
      <div className="bg-blue-400  rounded-lg  size-fit px-4 ">
          <h1 className="text-center">resume</h1>
        </div>
      <div className="flex w-full gap-10 justify-center items-center">
        {navItems.map((items, index) => (
          <div className="" key={index}>
            <p>{items}</p>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Navbar;
