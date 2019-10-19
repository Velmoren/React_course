import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';
import PostListItem from '../post-list-item'


// import './post-list.css';
import styled from 'styled-components';

const StyleListGroup = styled(ListGroup)`
    margin-top: 50px;
`

const PostList = ({ posts, onDelete, onEdit, onToggleImportant, onToggleLiked, id }) => {

    const elements = posts.map((item) => {

        const { id, ...itemProps } = item;

        return (
            <ListGroupItem key={id}>
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onEdit={(body) => onEdit(body, id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                    id={id}
                />
            </ListGroupItem>
        )
    });

    return (
        <>
            <StyleListGroup className="app-list">
                {elements}
            </StyleListGroup>
        </>
    )
}

export default PostList;