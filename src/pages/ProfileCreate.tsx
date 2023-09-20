import Header from "../components/Header";
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string(),
  age: z.number({ invalid_type_error: ""}),
  gender: z.number(),
  weight: z.number(),
  height: z.number(),
  goal: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

export const ProfileCreate = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  }
  =useForm<FormSchema>({ resolver: zodResolver(formSchema)})

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  }
  // ,(errors)=>{
  //   alert("データが誤っています")
  // }
  );
  console.log(errors);

  return (
    <>
    <Header />
    <form onSubmit={onSubmit} className="flex flex-col items-center pt-[100px]">

        <div className="flex flex-col items-center w-screen">
          <div className="ml-5 w-1/2 relative mt-5">
            <label className="text-gray-700">
              名前 Name
              <span className="text-red-500 required-dot">
                *
              </span>
            </label>
            <input type="text" id="with-indications"
              className=" rounded border border-black w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
               placeholder="Name" {...register('name')}/>
          </div>


        <div className="flex flex-col items-center w-screen">
          <div className="ml-5 w-1/2 relative mt-5">
            <label className="text-gray-700">
              性別 Gender
              <span className="text-red-500 required-dot">*</span>
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-black border border-gray-300"
                  value="male"
                  {...register('gender')}
                />
                <span className="ml-2">男性 Male</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-black border border-gray-300"
                  value="female"
                  {...register('gender')}
                />
                <span className="ml-2">女性 Female</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-black border border-gray-300"
                  value="other"
                  {...register('gender')}
                />
                <span className="ml-2">その他 Other</span>
              </label>

         
            </div>
          </div>

        <div className="flex flex-col items-center w-screen">
          <div className="ml-5 w-1/2 relative mt-5">
            <label className="text-gray-700">
              体重 Weight (kg)
              <span className="text-red-500 required-dot">
                *
              </span>
            </label>
            <input type="number" id="with-indications"
              className=" rounded border border-black w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent appearance-none"
              placeholder="Weight (kg)" 
              {...register('weight')}/>
          </div>

        <div className="flex flex-col items-center w-screen">
          <div className="ml-5 w-1/2 relative mt-5">
            <label className="text-gray-700">
              身長 Height (cm)
              <span className="text-red-500 required-dot">
                *
              </span>
            </label>
            <input type="number" id="with-indications"
              className=" rounded border border-black w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              placeholder="Height (cm)" {...register('height')} />
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
             placeholder="Goal" {...register('goal')} >
            </textarea>
          </div>
        </div>
      <button className="-z-50 bg-sky-400 text-[27px] px-8 py-2 hover:bg-sky-200 rounded font-bold fixed bottom-3 left-2" type='submit'>作成</button>
    </form>
    </>
  );
};