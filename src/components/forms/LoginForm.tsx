import { useNavigate } from "react-router-dom";
import { IUserLoginCrdentials } from "../../types/user";
import Input from "../ui/Input";
import routes from "../../constants/routes";

interface ILoginFormProps {
  SetUserCredentials: React.Dispatch<
    React.SetStateAction<IUserLoginCrdentials>
  >;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  loading: boolean;
  userCredentialsError: IUserLoginCrdentials;
}

const LoginForm = ({
  SetUserCredentials,
  handleLogin,
  loading,
  userCredentialsError,
}: ILoginFormProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <form className="flex flex-col gap-5" onSubmit={handleLogin}>
        <Input
          label="email"
          type="email"
          name="email"
          required
          setValue={SetUserCredentials}
          error={userCredentialsError.email}
        />
        <div>
          <Input
            label="password"
            type="password"
            name="password"
            required
            setValue={SetUserCredentials}
            error={userCredentialsError.password}
          />
          <span className="text-primary-blue">forget password?</span>
        </div>
        <div>
          <button
            className="w-full p-2 bg-primary-blue rounded hover:bg-opacity-70 disabled:bg-opacity-70"
            type="submit"
            disabled={loading}
          >
            Login
          </button>
          <p>
            Need an account?
            <span
              onClick={() => navigate(routes.REGISTER)}
              className="text-primary-blue cursor-pointer"
            >
              Register
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
