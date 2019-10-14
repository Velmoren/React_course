import React from "react";

// import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'};
        :hover {
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({ liked, allPosts }) => {
    // логика такая: проверяем последний символ количество постов и в зависимости от него формируем title
    let title = '';
    let lastNumberOfAllPosts = +(String(allPosts).substring(String(allPosts).length - 1, String(allPosts).length));
    console.log(lastNumberOfAllPosts);

    switch (lastNumberOfAllPosts) {
        case 1:
            title = 'запись';
            break;
        case 2:
        case 3:
        case 4:
            title = 'записи';
            break;

        default:
            title = 'записей';
            break;
    }
    // весь первый десяток - исключение
    if (+(String(allPosts).substring(0, 1)) === 1 && String(allPosts).length === 2) title = 'записей';



    return (
        <Header colored as='a'>
            <h1>Alex Ilyasov</h1>
            <h2>{allPosts} {title}, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;