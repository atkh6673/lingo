import { Edit, SimpleForm, TextInput, required } from "react-admin";

const validateField = [required()];

export const CourseEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput
                    source="id"
                    validate={validateField}
                    label="Id"
                />
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
        </Edit>
    );
};