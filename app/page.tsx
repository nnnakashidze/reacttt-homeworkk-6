"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { login } from "./api";
import Image from "next/image";
import { loginSchema, LoginType } from "./schema";

const Home = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: login,

    onSuccess: () => {
      alert("Good Job!");
    },
  });
  const onSubmit = (data: LoginType) => {
    mutation.mutate(data);
  };
  return (
    <div>
      <div>
        <div className="flex justify-between items-center bg-[#0A0D17] m-auto p-[20px] w-full max-w-[1092px] min-h-[576px]">
          <div className="px-[40px] py-[60px] w-full max-w-[506px] min-h-[536px]">
            <h1 className="font-semibold text-[#FFFFFF] text-[30px]">
              Let’s connect constellations
            </h1>
            <p className="mt-[8px] text-[#FFFFFF] text-[16px]">
              Let's align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>
            <form
              className="flex flex-col gap-[14px] mt-[41px] text-[#FFFFFF60]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex gap-[14px]">
                <input
                  type="text"
                  {...register("LastName")}
                  placeholder="Last Name"
                  className="bg-[#FFFFFF05] px-[14px] py-[12px] border border-[#FFFFFF60] rounded-[5px] w-full max-w-[206px] min-h-[42px]"
                />
                <input
                  type="text"
                  {...register("FirsName")}
                  placeholder="First Name"
                  className="bg-[#FFFFFF05] px-[14px] py-[12px] border border-[#FFFFFF60] rounded-[5px] w-full max-w-[206px] min-h-[42px]"
                />
              </div>
              <input
                type="text"
                {...register("Email")}
                placeholder="Email"
                className="bg-[#FFFFFF05] px-[14px] py-[12px] border border-[#FFFFFF60] rounded-[5px] w-full max-w-[426px] min-h-[42px]"
              />
              <input
                type="text"
                {...register("PhoneNumber")}
                placeholder="Phone Number"
                className="bg-[#FFFFFF05] px-[14px] py-[12px] border border-[#FFFFFF60] rounded-[5px] w-full max-w-[426px] min-h-[42px]"
              />
              <input
                type="text"
                {...register("Message")}
                placeholder="Message"
                className="bg-[#FFFFFF05] px-[14px] py-[12px] border border-[#FFFFFF60] rounded-[5px] w-full max-w-[426px] min-h-[109px]"
              />
              <button className="justify-center items-center rounded-[5px] w-full max-w-[426px] min-h-[42px] font-medium text-[#FFFFFF] text-[15px] sendingButton">
                Send it to the moon
              </button>
            </form>
          </div>
          <div>
            <Image src="/Image box.png" alt="image" width={516} height={536} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
