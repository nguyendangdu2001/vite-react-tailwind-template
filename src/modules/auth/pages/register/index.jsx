import React, { useState } from "react";
import useRegister from "@modules/auth/hooks/useRegister";
// import ClientCaptcha from "react-client-captcha";

const Register = () => {
  const { mutate: register, isLoading } = useRegister();
  const onFinish = (values) => {
    register(values);
  };
  const [captchaCode, setCaptchaCode] = useState("");
  const [passChal, setPassChal] = useState(true);

  const onFinishFailed = (errorInfo) => {};
  return <div>register</div>;
};

export default Register;
