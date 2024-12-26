import { Edit, SimpleForm, TextInput, BooleanInput, ReferenceInput, required } from "react-admin";

const validateField = [required()];

export const ChallengeOptionEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput
                    source="text"
                    validate={validateField}
                    label="Text"
                />
                <BooleanInput
                    source="correct"
                    label="Correct option"
                />
                <ReferenceInput
                    source="challengeId"
                    reference="challenges"
                />
                <TextInput
                    source="imageSrc"
                    label="Image URL"
                />
                <TextInput
                    source="audioSrc"
                    label="Audio URL"
                />
            </SimpleForm>
        </Edit>
    );
};