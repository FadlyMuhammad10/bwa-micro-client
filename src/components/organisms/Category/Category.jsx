import { CATEGORY_OPTIONS } from "@/constants";

export default function Category() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h3 className=" text-gray-600">Category</h3>
          <h4 className="text-xl">
            Explore & <span className="text-teal-500">Learn</span>
          </h4>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-9 mt-6 min-w-[172px] max-h-[219px] ">
        {CATEGORY_OPTIONS.map((item, index) => (
          <div
            key={index}
            className="relative border border-border p-8 cursor-pointer transition-all duration-200 group hover:bg-indigo-600 hover:text-white "
          >
            <div className="text-[#7186A0] group-hover:text-white">
              {item.icon}
            </div>

            <div className="mt-7">
              <div className="text-lg text-[#132B50]  font-semibold group-hover:text-white">
                {item.title}
              </div>
              <div className="text-[#7186A0] text-sm mt-1 transition-all duration-500">
                <span>{item.member} Courses</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
