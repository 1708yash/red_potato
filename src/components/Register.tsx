"use client"
import React, { Fragment, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Image from "next/image";
import useAuthStore from "@/store/authStore";
import {useRouter} from 'next/navigation'


const RegisterPage = () => {
  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const signup = useAuthStore((state)=>state.signUp
  )
  const user = useAuthStore((state)=>state.user
  )
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
     e.preventDefault();
     try {
      await signup(email,password)
       router.push('/')
       localStorage.setItem('user','yash');
     } catch(error)
     {
console.log(error)
     }
  }

  return (
    <Fragment>
      <div className="overflow-hidden h-screen flex justify-center items-center">
        <Image
          src="/loginbg.png"
          alt="background image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-lg"
        />
        <div className=" z-10 py-16 px-16 rounded-lg shadow-lg">
          <div className="relative mb-4">
            <div
              className=" h-full w-full bg-purple-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100
"
            ></div>
          </div>
          <form
          onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white text-xl  md:text-3xl font-bold mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-96 p-2 border text-gray-900 border-gray-300 rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-xl md:text-3xl text-white font-bold mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#d052d4] hover:bg-[#CD36D1] text-white w-96 py-2 px-4 rounded-lg"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterPage;
