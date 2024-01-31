import React from "react";

const DescriptionBox = () => {
  return (
    <div className="description-box m-[120px] mx-[170px] ">
      <div className="navigator flex ">
        <div className="descriptionbx-navbox flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border-2  border-solid border-gray-200">
          Description
        </div>

        <div className="descriptionbx-navbox flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border-2  border-solid border-gray-200 bg-white text-gray-500">
          Reviews (122)
        </div>
      </div>
      <div className="description-box-description flex flex-col gap-[25px] border-2 border-solid border-gray-200 p-[48px] pb-[70px]">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, sit,
          alias laboriosam eaque rem neque tenetur laudantium iusto soluta ipsam
          totam, reiciendis aliquid. Sit dolor, ipsam cupiditate odit ut beatae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sed
          dolorum delectus necessitatibus cum suscipit at a? Fuga maxime nulla
          non itaque velit accusantium vel. Totam officia tempore neque
          doloribus?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
