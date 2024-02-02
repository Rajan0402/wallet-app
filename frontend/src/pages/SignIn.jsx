import Button from "../components/Button";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import BottomWarning from "../components/BottomWarning";
import InputBox from "../components/InputBox";

export function SignIn() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-red-100 ">
      <div className="bg-white max-w-xs flex flex-col pt-5 pb-3 px-6 rounded-lg">
        <Heading label={"SignIn"} />
        <SubHeading label={"Enter your credentials to create an account"} />
        <InputBox label={"Email"} placeholder={"johndoe@examle.com"} />
        <InputBox label={"Password"} placeholder={"********"} />
        <div className="pt-2">
          <Button label={"Sign In"} />
        </div>
        <BottomWarning
          label={"don't have an account?"}
          buttonText={"SignUp"}
          to={"/signup"}
        />
      </div>
    </section>
  );
}
