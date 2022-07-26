import FormLayout from "../../layout/formLayout";
import { Text, Select } from "../../components/inputs";
import useJoinController from "../../controller/useJoinController";
import departmentList from "../../const/departmentList";
import InputWrapper from "./InputWrapper";
const Join = () => {
  const formControls = useJoinController();
  return (
    <FormLayout
      title="Welcome to connect"
      description="We are thrilled to know that you want to join the connect mission. Let's get started🚀."
    >
      <InputWrapper>
        <Text
          type="text"
          label="full name"
          value={formControls.name.state}
          setValue={formControls.name.setState}
        />
        <Select
          label="department"
          options={departmentList}
          value={formControls.department.state}
          setValue={formControls.department.setState}
        />
      </InputWrapper>
      <InputWrapper>
        <Text
          type="year"
          label="join year"
          value={formControls.join.state}
          setValue={formControls.join.setState}
        />

        <Text
          type="tel"
          label="mobile no"
          value={formControls.phone.state}
          setValue={formControls.phone.setState}
        />
      </InputWrapper>
      <InputWrapper>
        <Text
          type="email"
          label="email address"
          value={formControls.email.state}
          setValue={formControls.email.setState}
        />
      </InputWrapper>
      <InputWrapper>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-3 md:ml-auto"
          type="button"
        >
          submit 💌
        </button>
      </InputWrapper>
    </FormLayout>
  );
};
export default Join;
