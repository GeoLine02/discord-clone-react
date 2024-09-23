import { AxiosResponse } from "axios";
import { IUserRegisterCredentials } from "../../types/user";
import Input from "../ui/Input";

interface IRegisterFormProps {
  setUserCredentials: React.Dispatch<
    React.SetStateAction<IUserRegisterCredentials>
  >;

  handleRegister: (
    e: React.FormEvent<HTMLFormElement>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => Promise<AxiosResponse<any> | undefined>;
  loading: boolean;
  registrationResult: string;
  userCredentialsError: IUserRegisterCredentials;
}

const ReigsterForm = ({
  loading,
  setUserCredentials,
  handleRegister,
  registrationResult,
  userCredentialsError,
}: IRegisterFormProps) => {
  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-5">
      <Input
        error={userCredentialsError.email}
        required
        type="email"
        label="email"
        name="email"
        setValue={setUserCredentials}
      />
      <Input
        error={userCredentialsError.username}
        required
        label="username"
        name="usrname"
        setValue={setUserCredentials}
      />
      <Input
        error={userCredentialsError.displayName}
        required
        label="display name"
        name="displayName"
        setValue={setUserCredentials}
      />
      <Input
        error={userCredentialsError.password}
        required
        label="password"
        name="password"
        type="password"
        setValue={setUserCredentials}
      />
      <h1 className="text-center text-sm">{registrationResult}</h1>
      <button
        disabled={loading}
        className="w-full p-2 bg-primary-blue rounded hover:bg-opacity-70 disabled:bg-opacity-70"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default ReigsterForm;
