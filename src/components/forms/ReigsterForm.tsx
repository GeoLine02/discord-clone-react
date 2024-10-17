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
  userCredentialsError: IUserRegisterCredentials;
  userCredentials: IUserRegisterCredentials;
}

const ReigsterForm = ({
  loading,
  setUserCredentials,
  handleRegister,
  userCredentialsError,
  userCredentials,
}: IRegisterFormProps) => {
  console.log(userCredentials);
  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-5">
      <Input
        value={userCredentials}
        error={userCredentialsError.email}
        required
        type="email"
        label="email"
        name="email"
        setValue={setUserCredentials}
        hasBorder={true}
      />
      <Input
        value={userCredentials}
        hasBorder={true}
        error={userCredentialsError.username}
        required
        label="username"
        name="username"
        setValue={setUserCredentials}
      />
      <Input
        value={userCredentials}
        hasBorder={true}
        error={userCredentialsError.displayName}
        required
        label="display name"
        name="displayName"
        setValue={setUserCredentials}
      />
      <Input
        value={userCredentials}
        hasBorder={true}
        error={userCredentialsError.password}
        required
        label="password"
        name="password"
        type="password"
        setValue={setUserCredentials}
      />
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
