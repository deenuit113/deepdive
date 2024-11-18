import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaArchive, FaLightbulb, FaPencilAlt, FaTag, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import getStandardName from '../../utils/getStandardName';
import { toggleTagsModal } from '../../store/modal/modalSlice';
import { v4 }from 'uuid';
import { toggleMenu } from '../../store/menu/menuSlice';

const items = [
    {
        icon: <FaArchive/>, title: "Archive", id: v4()
    },
    {
        icon: <FaTrash/>, title: "Trash", id: v4()
    }
]

const Sidebar = () => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector(state => state.menu);
    const { tagsList } = useSelector(state => state.tags);

    return (
        <Container $openMenu={isOpen}>
            <MainBox $openMenu={isOpen}>
                <StyledLogo>
                    <h1>Keep</h1>
                </StyledLogo>

                <ItemsBox>
                    {/* Notes */}
                    <li onClick={() => dispatch(toggleMenu(false))}>
                        <NavLink
                            to={'/'}
                            state={`notes`}
                            className={({ isActive }) =>
                                isActive ? 'active-item' : 'inactive-item'
                            }
                        >
                            <span>
                                <FaLightbulb/>
                            </span>
                            <span>
                                Notes
                            </span>
                        </NavLink>
                    </li>

                    {/* Tags List */}
                    {
                        tagsList?.map(({ tag, id }) => (
                            <li key={id} onClick={() => dispatch(toggleMenu(false))}>
                                <NavLink
                                    to={`tag/${tag}`}
                                    state={tag}
                                    className={(isActive) => isActive ? 'active-item':'inactive-item'}
                                >
                                    <span>
                                        <FaTag/>
                                    </span>
                                    <span>
                                        {getStandardName(tag)}
                                    </span>
                                </NavLink>
                            </li>
                        ))
                    }

                    {/* Edit Notes */}
                    <li
                        className='sidebar__edit-item'
                        onClick={() =>   //'add' | 'edit'   // 'true' | 'false'
                            dispatch(toggleTagsModal({ type: 'edit', view: true }))
                        }
                    > 
                        <span>
                            <FaPencilAlt/>
                        </span>
                        <span>Edit Notes</span>
                    </li>

                    {/* Archive and Trash */}
                    {
                        items.map(({ icon, title, id }) => (
                            <li key={id} onClick={() => dispatch(toggleMenu(false))}>
                                <NavLink
                                    to={`/${title.toLowerCase()}`}
                                    state={title}
                                    className={(isActive) => isActive? 'active-item':'inactive-item'}
                                >
                                    <span>
                                        {icon}
                                    </span>
                                    <span>
                                        {title}
                                    </span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ItemsBox>
            </MainBox>
        </Container>
    )
}

const Container = styled.nav`
    @media (max-width: 950px) {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        transition: 200ms visibility ease-in-out, 250ms background-color ease-in-out;
        visibility: ${({ $openMenu }) => $openMenu ? "visible" : "hidden"};
        background-color: ${({ $openMenu }) => $openMenu ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.0)"};
        cursor: pointer;
    }
`

const MainBox = styled.div`
    width: 250px;
    height: 100%;
    min-height: 100vh;
    background-color: #FDEFC3;

    @media (max-width: 950px) {
        transition: 350ms transform ease-in-out;
        position: absolute;
        z-index: 10;
        transform: ${({$openMenu}) => $openMenu ? "translateX(0%)" : "translateX(-100%)"};
    }
`

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    padding: 24px 20px;
    margin-bottom: 20px;
    box-shadow: 0px 2px 4px 0px rgba(255,255,255,0.3);
    span {
        font-size: 1.25rem;
        font-weight: 600;
    }
`

const ItemsBox = styled.ul`
    li {
        width: 100%;
        height: 60px;
        list-style: none;
        display: flex;
        align-items: center;
        font-weight: 500;
        cursor: pointer;
    }

    svg {
        margin-right: 20px;
    }

    a {
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 20px;
    }

    .active-item {
        background-color: rgba(255, 255, 255, 0.18);
    }

    .inactive-item {
        transition: 250ms background-color ease-in-out;
        &:hover {
            background-color: rgba(255, 255, 255, 0.15);
        }
    }

    .sidebar__edit-item {
        padding-left: 20px;
        transition: 250ms background-color ease-in-out;
        &:hover {
            background-color: rgba(255, 255, 255, 0.15);
        }
    }
`

export default Sidebar