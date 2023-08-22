import FormLayout from "../../components/layout/formLayout";
import { Text, Select } from "../../components/common/inputs";
import useJoin from "./useJoin";
import departmentList from "../../const/departmentList";
import InputWrapper from "./InputWrapper";
import { ConfirmDialog, FailedDialog } from "../../components/common/dialog";
import SeoHeader from "../../components/common/SeoHeader";
const Join = () => {
  const { Handlers, submitHandler, checkIsFilled, dialogToggler } =
    useJoin();
  return (
    <FormLayout
      title="Welcome to connect"
      description="We are thrilled to know that you want to join the connect mission, Let's get started 🚀."
    >
      <SeoHeader title="Join form" />
      <ConfirmDialog
        title="Thanks for joining 😍"
        description="We will get back to you as soon as possible please do watch your whatsapp and mail."
        isOpen={dialogToggler.success.get}
        onCloseHandler={dialogToggler.success.set}
      />
      <FailedDialog
        title="Submission failed 😔"
        description="Please try again after some time. For further details and support contact us."
        isOpen={dialogToggler.error.get}
        onCloseHandler={dialogToggler.error.set}
      />
      <InputWrapper>
        <Text
          type="text"
          label="full name"
          value={Handlers.name.state}
          setValue={Handlers.name.setState}
        />
        <Select
          label="department"
          options={departmentList}
          value={Handlers.department.state}
          setValue={Handlers.department.setState}
        />
      </InputWrapper>
      <InputWrapper>
        <Text
          type="number"
          label="join year"
          placeHolder="Enter college joining year"
          value={Handlers.join.state}
          setValue={Handlers.join.setState}
          limit={4}
        />

        <Text
          type="number"
          label="mobile no"
          value={Handlers.phone.state}
          setValue={Handlers.phone.setState}
          limit={10}
        />
      </InputWrapper>
      <InputWrapper>
        <Text
          type="email"
          label="email address"
          value={Handlers.email.state}
          setValue={Handlers.email.setState}
        />
      </InputWrapper>
      <InputWrapper>
        <button
          className={`${checkIsFilled ? "hover:bg-blue-700" : "opacity-60"
            } bg-blue-500  text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline mx-3 md:ml-auto`}
          type="button"
          onClick={checkIsFilled ? submitHandler : undefined}
          title={!checkIsFilled ? "Enter each field" : undefined}
        >
          SUBMIT
        </button>
      </InputWrapper>
    </FormLayout>
  );
};
export default Join;
