"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginView = () => {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Tên đăng nhập là bắt buộc"),
    password: Yup.string().required("Mật khẩu là bắt buộc"),
    rememberMe: Yup.boolean(),
  });

  const handleLogin = (values: any) => {
    // Handle login logic here with values.username, values.password, values.rememberMe
    console.log(values);
  };
  const intputVariant = "w-full px-3 py-2 border rounded-lg bg-gray-700 border-gray-600 focus:outline-none focus:ring-2 focus:ring-gold-500";

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-dark-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gold-500 mb-6 gradient-background">
          Đăng Nhập Tài Khoản
        </h2>
        <Formik
          initialValues={{ username: "", password: "", rememberMe: false }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ values, handleChange }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="username">
                  Tên đăng nhập
                </label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  className={intputVariant}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-300 mb-2" htmlFor="password">
                  Mật khẩu
                </label>
                <Field
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className={intputVariant}
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 text-gray-400 hover:text-gray-200"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  👁️
                </button>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <label className="inline-flex items-center text-gray-300">
                  <Field
                    type="checkbox"
                    name="rememberMe"
                    className="form-checkbox h-4 w-4 text-gold-500"
                  />
                  <span className="ml-2">Nhớ mật khẩu</span>
                </label>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  Quên mật khẩu?
                </a>
              </div>
              <div className="text-gray-400 text-xs mb-6">
                Tôi 18 tuổi trở lên. Tôi đã đọc, chấp nhận và đồng ý. Toàn bộ chính sách, điều khoản và điều kiện, luật lệ.
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-400 to-gold-600 text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
              >
                Đăng nhập
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

LoginView.displayName = "LoginView";

export default LoginView;
