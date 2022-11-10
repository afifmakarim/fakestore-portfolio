import React, { useState } from "react";
import Breadcrumbs from "../../Breadcrumbs";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { doLogin } from "../../../services/fakestore-service";

export default function LoginSection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      username,
      password,
    };

    if (!username || !password) {
      toast.error("Email dan Password wajib diisi!!");
    } else {
      const response = await doLogin(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success("Login Berhasil");
        console.log(response);
        const { token } = response.data;
        const tokenBase64 = btoa(token);
        Cookies.set("authToken", tokenBase64, { expires: 1 });
        router.push("/");
      }
    }
  };
  return (
    <>
      <div className="max-w-7xl mx-auto mb-5">
        <h4 className="font-bold text-lg py-5 px-8 md:px-0">Customer Login</h4>

        <div className="flex gap-4 flex-col md:flex-row p-5 md:p-0">
          <div className="max-w-7xl w-full bg-[#F5F9FF] px-5 py-8 flex flex-col">
            <h4 className="text-sm font-bold">Registered Customers</h4>
            <p className="text-xs my-2">
              If you have an account, sign in with your email address.
            </p>
            <div className="mt-4">
              <label className="text-black font-bold text-sm">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                id="username"
                type="text"
                placeholder="Your Username"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="my-4">
              <label className="text-black font-bold text-sm">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between ">
              <button
                onClick={onSubmit}
                type="submit"
                className="rounded-full px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blueTheme hover:bg-blue-500"
              >
                Login
              </button>
              <a className="text-xs text-blueTheme">Forgot Your Password?</a>
            </div>
          </div>

          <div className="max-w-7xl w-full bg-[#F5F9FF] px-5 py-8 flex flex-col">
            <h4 className="text-sm font-bold">New Customer?</h4>
            <p className="text-xs my-2">
              Creating an account has many benefits:
            </p>
            <ul className="pl-5 list-disc text-xs leading-5">
              <li>Check out faster</li>
              <li>Keep more than one address</li>
              <li>Track orders and more</li>
            </ul>
            <div className="flex mt-4">
              <button className="rounded-full px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blueTheme hover:bg-blue-500">
                Create An Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
