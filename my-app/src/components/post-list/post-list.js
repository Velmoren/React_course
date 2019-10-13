import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';
import PostListItem from '../post-list-item'


import './post-list.css';

const PostList = ({ posts, onDelete, onEdit }) => {

    const elements = posts.map((item) => {

        const { id, ...itemProps } = item;
        return (
            <ListGroupItem key={id}>
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onEdit={(body) => onEdit(body, id)}
                />
            </ListGroupItem>
        )
    });

    return (
        <>
            <ListGroup className="app-list">
                {elements}
            </ListGroup>
        </>
    )
}

export default PostList;