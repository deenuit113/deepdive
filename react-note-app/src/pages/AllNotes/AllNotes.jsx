import React, { useState } from 'react'
import { ButtonOutline, Container, EmptyMsgBox } from '../../styles/styles'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { toggleFiltersModal } from '../../store/modal/modalSlice'
import getAllNotes from '../../utils/getAllNotes'
import FiltersModal from '../../components/Modal/FiltersModal/FiltersModal'

const AllNotes = () => {
    const { mainNotes } = useSelector(state => state.notesList);
    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');
    const { viewFiltersModal } = useSelector(state => state.modal);
    return (
        <Container> 
            {
                viewFiltersModal && (
                    <FiltersModal
                    
                    />
                )
 
            }
            {
                mainNotes.length === 0 ? (
                    <EmptyMsgBox>
                        노트가 없습니다.
                    </EmptyMsgBox>
                ) : (
                    <>
                        <TopBox>
                            <InputBox>
                                <input
                                    type='text'
                                    placeholder='노트의 제목을 입력해주세요.'
                                    value={searchInput}
                                    onChange={e=> setSearchInput(e.target.value)}
                                />
                            </InputBox>
                            <div className='notes__filter-btn'>
                                <ButtonOutline
                                    className='nav__btn'
                                    onClick={()=> setSearchInput(() => dispatch(toggleFiltersModal(true)))}
                                >
                                    <span>정렬</span>
                                </ButtonOutline>
                            </div>
                        </TopBox>
                        <Box>
                            {getAllNotes(mainNotes, filter)}
                        </Box>
                    </>
                )
            }
        </Container>
    )
}

const TopBox = styled.div`
    margin-right: 25px;
    .notes__filter-btn {
        display: flex;
        justify-content: flex-end;
    }
`;

const Box = styled.div`

`;

const InputBox = styled.div`
    flex: 1;
    height: 33px;
    display: flex;
    align-items: center;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    transition: 300ms box-shadow ease-in;
    margin-bottom: 16px;

    &:hover {
        box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.4);
    }

    input {
        width: 100%;
        height: 100%:
        padding: 0px 10px;
        border: none;
        outline: none;
        border-radius: 5px;
        &::placeholder {
            color: rgba(0, 0, 0, 0.3);
        }
    }
`


export default AllNotes