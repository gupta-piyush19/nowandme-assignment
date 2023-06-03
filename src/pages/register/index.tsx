import Head from "next/head";
import Image from "next/image";
import RegisterForm from "@/common/components/RegisterForm";

const Register = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Head>
        <title>Now&Me | Register</title>
      </Head>
      <div className="flex shrink-0 flex-col gap-12 justify-center items-center flex-1">
        <Image src={"/icons/logo.svg"} alt="logo" width={40} height={40} />
        <div className="w-full">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
