"use client";

import { FC, useState } from "react";
import CardWrapper from "./card-wrapper";

import FormError from "../form-error";
import FormSuccess from "../form-success";

import { useSearchParams } from "next/navigation";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const searchParams = useSearchParams();

  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonHref="/auth/register"
      backButtonLabel=""
      showSocial
    >
      <FormError message={error || urlError} />
      <FormSuccess message={success} />
    </CardWrapper>
  );
};

export default LoginForm;
