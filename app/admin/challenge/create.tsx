import { Create, SimpleForm, NumberInput, TextInput, SelectInput, ReferenceInput, required } from "react-admin";

const validateField = [required()];

export const ChallengeCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput
                    source="question"
                    validate={validateField}
                    label="Question"
                />
                <SelectInput
                    source="type"
                    choices={[
                        {
                            id: "SELECT",
                            name: "SELECT"
                        },
                        {
                            id: "ASSIST",
                            name: "ASSIST"
                        }
                    ]}
                    validate={validateField}
                />
                <ReferenceInput
                    source="lessonId"
                    reference="lessons"
                />
                <NumberInput
                    source="order"
                    validate={validateField}
                    label="Order"
                />
            </SimpleForm>
        </Create>
    );
};