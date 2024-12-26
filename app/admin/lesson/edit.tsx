import { Edit, SimpleForm, NumberInput, TextInput, ReferenceInput, required } from "react-admin";

const validateField = [required()];

export const LessonEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput
                    source="title"
                    validate={validateField}
                    label="Title"
                />
                <ReferenceInput
                    source="unitId"
                    reference="units"
                />
                <NumberInput
                    source="order"
                    validate={validateField}
                    label="Order"
                />
            </SimpleForm>
        </Edit>
    );
};