"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const RegisterView: React.FC = () => {
  const initialValues = {
    username: "",
    password: "",
    phone: "",
    fullName: "",
    agent: "",
    bankAccount: "",
    bankName: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .max(9, "Tài khoản không quá 9 ký tự")
      .required("Tài khoản là bắt buộc"),
    password: Yup.string()
      .min(6, "Mật khẩu ít nhất 6 ký tự")
      .max(20, "Mật khẩu không quá 20 ký tự")
      .required("Mật khẩu là bắt buộc"),
    phone: Yup.string().required("Số điện thoại là bắt buộc"),
    fullName: Yup.string().required("Họ tên chủ tài khoản là bắt buộc"),
    bankAccount: Yup.string().required("Số tài khoản là bắt buộc"),
    bankName: Yup.string().required("Ngân hàng là bắt buộc"),
    agent: Yup.string(),
  });

  const handleSubmit = (values: typeof initialValues) => {
    // Handle form submission logic here
    console.log(values);
  };

  // Class name variables
  const inputClass =
    "w-full px-3 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500";
  const errorClass = "text-red-500";
  const labelClass = "block text-gray-200";
  const containerClass =
    "flex items-center justify-center min-h-screen bg-gray-900";
  const formContainerClass =
    "w-full max-w-md p-8 space-y-6 bg-dark-800 rounded-lg shadow-md";
  const buttonClass =
    "w-full bg-gradient-to-r from-gold-400 to-gold-600 text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500";

  return (
    <div className={containerClass}>
      <div className={formContainerClass}>
        <h2 className="text-2xl font-bold text-center text-gold-500 mb-6 gradient-background">
          Đăng Kí Tài Khoản
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-4">
              <div>
                <label className={labelClass}>
                  Tài khoản (không quá 9 ký tự):
                </label>
                <Field
                  type="text"
                  name="username"
                  maxLength={9}
                  className={inputClass}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className={errorClass}
                />
              </div>
              <div>
                <label className={labelClass}>Mật khẩu (6-20 ký tự):</label>
                <Field
                  type="password"
                  name="password"
                  minLength={6}
                  maxLength={20}
                  className={inputClass}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={errorClass}
                />
              </div>
              <div>
                <label className={labelClass}>Số điện thoại:</label>
                <Field type="text" name="phone" className={inputClass} />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className={errorClass}
                />
              </div>
              <div>
                <label className={labelClass}>Họ tên chủ tài khoản:</label>
                <Field type="text" name="fullName" className={inputClass} />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className={errorClass}
                />
              </div>
              <div>
                <label className={labelClass + " mb-2"}>Ngân Hàng</label>
                <Field as="select" name="bankName" className={inputClass}>
                  <option value="">Chọn ngân hàng</option>
                  <option value="ACB">ACB</option>
                  <option value="SJB">SJB</option>
                  <option value="ARIBANK">ARIBANK</option>
                  <option value="KOREANBANK">KOREANBANK</option>
                </Field>
                <ErrorMessage
                  name="bankName"
                  component="div"
                  className={errorClass}
                />
              </div>
              <div>
                <label className={labelClass}>Số tài khoản:</label>
                <Field type="text" name="bankAccount" className={inputClass} />
                <ErrorMessage
                  name="bankAccount"
                  component="div"
                  className={errorClass}
                />
              </div>
              <div>
                <label className={labelClass}>Đại lý giới thiệu:</label>
                <Field type="text" name="agent" className={inputClass} />
                <ErrorMessage
                  name="agent"
                  component="div"
                  className={errorClass}
                />
              </div>
              <div className="flex items-center">
                <Field
                  type="checkbox"
                  name="acceptTerms"
                  required
                  className="w-4 h-4 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"
                />
                <label className="ml-2 text-gray-200">
                  Tôi 18 tuổi trở lên. Tôi đã đọc, chấp nhận và đồng ý. Toàn bộ
                  chính sách, điều khoản và điều kiện, luật lệ.
                </label>
                <ErrorMessage
                  name="acceptTerms"
                  component="div"
                  className={errorClass}
                />
              </div>
              <button type="submit" className={buttonClass}>
                Đăng Ký
              </button>
            </Form>
          )}
        </Formik>
        <p className="text-center text-gray-200">
          Đã có tài khoản?{" "}
          <Link href="/login" className="text-yellow hover:underline">
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

RegisterView.displayName = "RegisterView";
export default RegisterView;
