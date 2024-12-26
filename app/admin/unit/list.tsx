import { Datagrid, List, TextField, ReferenceField, NumberField } from "react-admin";

export const UnitList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <NumberField source="id" />
                <TextField source="title" />
                <TextField source="description" />
                <ReferenceField source="courseId" reference="courses" />
                <NumberField source="order" />
            </Datagrid>
        </List>
    );
};