import React from "react";
import useLogin from "@modules/auth/hooks/useLogin";
import { Link } from "react-router-dom";
import { useAppSelector } from "@hooks/reduxHook";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Input from "@components/Input";
import { yupResolver } from "@hookform/resolvers/yup";

import SocialLoginSection from "@modules/auth/components/SocialLoginSection";
const Login = () => {
  const { mutate: login, isLoading } = useLogin();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required(),
      })
    ),
  });
  const onFinish = (values) => {
    login(values);
  };
  const isAuth = useAppSelector((state) => state?.auth?.isAuth);

  return (
    <div className="flex items-center justify-center h-full">
      <form
        className="max-w-lg p-12 space-y-10 bg-white rounded-lg shadow-lg"
        onSubmit={handleSubmit(onFinish)}
      >
        <div className="text-4xl font-bold">Đăng nhập</div>
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-1/6 h-0.5 bg-gray-500"></div>
            <div className="font-semibold text-gray-600 font-actor">
              Sign up with
            </div>
          </div>

          <SocialLoginSection />
        </div>
        <div className="space-y-6">
          <Input
            {...register("email")}
            type="text"
            placeholder="Email"
            className="w-full px-6 py-4 font-medium transition-colors bg-gray-100 border-0 rounded-xl dark:bg-gray-800 dark:text-gray-50"
          />
          <Input
            {...register("password")}
            type="password"
            placeholder="Mật khẩu"
            className="w-full px-6 py-4 font-medium transition-colors bg-gray-100 border-0 rounded-xl dark:bg-gray-800 dark:text-gray-50"
          />
          {/* <div className="font-medium">
            <label>
              <input type="checkbox" className="rounded" /> I aggree with policy
            </label>
          </div> */}
        </div>

        <div className="grid place-content-center">
          <button
            type="submit"
            className="px-5 py-3 text-2xl font-medium tracking-wide bg-blue-500 rounded text-gray-50"
          >
            Đăng nhập
          </button>
        </div>
        <div className="font-medium text-center">
          Chưa có tài khoản ?{" "}
          <Link to="/register" className="text-blue-600">
            Đăng ký
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
