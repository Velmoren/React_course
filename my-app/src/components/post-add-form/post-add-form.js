import React from "react";


const PostAddForm = () => {
    return (
        <form className="botoom-panel d-flex">
            <input
                type="text"
                placeholder="О чем вы думаете сейчас"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary">
                Добавить
            </button>
        </form>
    )
}

export default PostAddForm;