import { FormEvent, useContext, useState } from "react";
import { IUserLoginCrdentials } from "../types/user";
import LoginForm from "../components/forms/LoginForm";
import { authorizeUser } from "../services/users";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import validateForm from "../utils/validateForm";
import validationSchema from "../schemas/userLoginSchema";
import HeroImage from "../assets/HeroImage.svg";
import QRCode from "../assets/QR.png";
import { IoIosArrowBack } from "react-icons/io";

const Login = () => {
  const navigate = useNavigate();
  const [userCredentials, SetUserCredentials] = useState<IUserLoginCrdentials>({
    email: "",
    password: "",
  });
  const [userCredentialsError, setUserCrdentialsError] =
    useState<IUserLoginCrdentials>({
      email: "",
      password: "",
    });

  const [loading, setLoading] = useState<boolean>(false);

  const authContext = useContext(AuthContext);
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      const { errors, isValid } = await validateForm(
        validationSchema,
        userCredentials
      );
      if (isValid) {
        const resp = await authorizeUser(userCredentials);
        authContext.setToken(resp);
        navigate(routes.CHANNEL);
      } else {
        setUserCrdentialsError(errors);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen bg-primary-blue flex items-center justify-center relative z-50">
      <div className="bg-secondary-gray text-white rounded-md max-w-4xl p-6 z-50 relative flex gap-16">
        <section>
          <div
            onClick={() => navigate(routes.HOME)}
            className="flex items-center mb-4 cursor-pointer"
          >
            <IoIosArrowBack size={20} />
            <span>Go back</span>
          </div>
          <div className="text-center space-y-3">
            <h1 className="text-2xl font-semibold">Welcome back!</h1>
            <p className="text-gray-600">We're so excited to see you again</p>
          </div>
          <LoginForm
            loading={loading}
            userCredentials={userCredentials}
            userCredentialsError={userCredentialsError}
            SetUserCredentials={SetUserCredentials}
            handleLogin={handleLogin}
          />
        </section>
        <section className="md:flex hidden flex-col items-center justify-center gap-4">
          <img src={QRCode} alt="QR code" />
          <h1>Log in wiht QR Code</h1>
          <p className="max-w-52 text-center">
            Scan this with discord mobile app to log in instantly.
          </p>
          <span className="text-primary-blue">Or sign in with passkey</span>
        </section>
      </div>
      <img
        className="bg-cover absolute -z-10 bottom-0 right-0 w-full"
        src={HeroImage}
        alt="hero image"
      />
    </div>
  );
};

export default Login;
