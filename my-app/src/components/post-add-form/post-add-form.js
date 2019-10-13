import React from "react";
import { Button, Form, Input } from 'reactstrap';

import './post-add-form.css';

const PostAddForm = ({ onAdd }) => {
    return (
        <Form className="d-flex">
            <Input
                type="text"
                placeholder="О чем вы думаете сейчас"
            />
            <Button
                outline
                color="secondary"
                type="button"
                onClick={() => onAdd('Hello')}>
                Добавить
            </Button>
        </Form>
    )
}

export default PostAddForm;