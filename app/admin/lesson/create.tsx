import { Create, SimpleForm, NumberInput, TextInput, ReferenceInput, required } from "react-admin";

const validateField = [required()];

export const LessonCreate = () => {
    return (
        <Create>
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
        </Create>
    );
};