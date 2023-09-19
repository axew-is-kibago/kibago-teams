export const ProfileCreate = () => {
  return (
    <>
    <div className="flex flex-col items-center">

        <div className="flex flex-col items-center w-screen">
          <div className="ml-5 w-1/2 relative mt-5">
            <label className="text-gray-700">
              名前 Name
              <span className="text-red-500 required-dot">
                *
              </span>
            </label>
            <input type="Name" id="with-indications"
              className=" rounded border border-black w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              name="Name" placeholder="Name" />
          </div>
        </div>

        <div className="flex flex-col items-center w-screen">
          <div className="ml-5 w-1/2 relative mt-5">
            <label className="text-gray-700">
              性別 Gender
              <span className="text-red-500 required-dot">
                *
              </span>
            </label>
            <input type="Gender" id="with-indications"
              className=" rounded border border-black w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              name="Gender" placeholder="Gender" />
          </div>
        </div>

        <div className="flex flex-col items-center w-screen">
          <div className="ml-5 w-1/2 relative mt-5">
            <label className="text-gray-700">
              体重 Weight
              <span className="text-red-500 required-dot">
                *
              </span>
            </label>
            <input type="Weight" id="with-indications"
              className=" rounded border border-black w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              name="Weight" placeholder="Weight" />
          </div>
        </div>

        <div className="flex flex-col items-center w-screen">
          <div className="ml-5 w-1/2 relative mt-5">
            <label className="text-gray-700">
              身長 Height
              <span className="text-red-500 required-dot">
                *
              </span>
            </label>
            <input type="Height" id="with-indications"
              className=" rounded border border-black w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              name="Height" placeholder="Height" />
          </div>
        </div>

        <div className="flex flex-col items-center w-screen">
          <div className="ml-5 w-1/2 relative mt-5">
            <label className="text-gray-700">
              目標 Goal
              <span className="text-red-500 required-dot">
                *
              </span>
            </label>
            <textarea 
              className=" rounded border border-black w-full py-2 px-4 h-[200px] bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              name="Goal" placeholder="Goal" >
            </textarea>
          </div>
        </div>
    </div>
    </>
  );
};