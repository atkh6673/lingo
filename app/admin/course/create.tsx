import { Create, SimpleForm, TextInput, required } from "react-admin";

const validateField = [required()];

export const CourseCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput
                    source="title"
                    validate={validateField}
                    label="Title"
                />
                <TextInput
                    source="imageSrc"
                    validate={validateField}
                    label="Image"
                />
            </SimpleForm>
        </Create>
    );
};