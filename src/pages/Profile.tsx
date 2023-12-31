import Button from "../components/Button";
import Header from "../components/Header";

export const Profile = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center pt-[100px] ">
          <div className="flex flex-col items-center w-screen">
            <div className="text-[45px]">マイプロフィール</div>
            <div className="ml-5 w-1/2 mt-1">
              <label className="text-gray-700">
                名前 Name
                <span className="text-red-500 required-dot">
                  *
                </span>
              </label>
              <div className=" rounded flex-1 border border-black w-full py-2 px-4 bg-white text-gray-700 text-base ">
                Name
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-screen">
            <div className="ml-5 w-1/2 mt-5">
              <label className="text-gray-700">
                性別 Gender
                <span className="text-red-500 required-dot">
                  *
                </span>
              </label>
              <div className=" rounded flex-1 border border-black w-full py-2 px-4 bg-white text-gray-700 text-base ">
                Gender
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-screen">
            <div className="ml-5 w-1/2 mt-5">
              <label className="text-gray-700">
                体重 Weight
                <span className="text-red-500 required-dot">
                  *
                </span>
              </label>
              <div className=" rounded flex-1 border border-black w-full py-2 px-4 bg-white text-gray-700 text-base ">
                Weight
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-screen">
            <div className="ml-5 w-1/2 mt-5">
              <label className="text-gray-700">
                身長 Height
                <span className="text-red-500 required-dot">
                  *
                </span>
              </label>
              <div className=" rounded flex-1 border border-black w-full py-2 px-4 bg-white text-gray-700 text-base ">
                Height
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-screen">
            <div className="ml-5 w-1/2 mt-5">
              <label className="text-gray-700">
                目標 Goal
                <span className="text-red-500 required-dot">
                  *
                </span>
              </label>
              <div className=" rounded flex-1 border border-black w-full py-2 px-4 h-[200px] bg-white text-gray-700 text-base ">
                Goal
              </div>
            </div>
          </div>
      </div>
      <Button href="/participant" title="戻る" />
    </>
  );
};
