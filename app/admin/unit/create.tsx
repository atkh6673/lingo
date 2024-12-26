import { Create, SimpleForm, NumberInput, TextInput, ReferenceInput, required } from "react-admin";

const validateField = [required()];

export const UnitCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput
                    source="title"
                    validate={validateField}
                    label="Title"
                />
                <TextInput
                    source="description"
                    validate={validateField}
                    label="description"
                />
                <ReferenceInput
                    source="courseId"
                    reference="courses"
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