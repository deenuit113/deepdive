import React from 'react'
import { DeleteBox, FixedContainer } from '../modal.styles'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { toggleFiltersModal } from '../../../store/modal/modalSlice'

const FiltersModal = ({ handleFilter, filter, handleClear }) => {

    const dispatch = useDispatch();
    return (
        <FixedContainer>
            <Container>
                <DeleteBox
                    className='filters__close'
                >
                    <FaTimes
                        onClick={() => dispatch(toggleFiltersModal(false))}
                    />
                </DeleteBox>

                <TopBox>
                    <div
                        className='filters__title'
                    >정렬</div>
                    <small
                        className='filters__delete'
                        onClick={handleClear}
                    >
                        Clear
                    </small>
                </TopBox>

                <Box>
                    <div className='filters__subtitle'>PRIORITY</div>
                    <div className='filters__check'>
                        <input
                            onChange={handleFilter}
                            type='radio'
                            name='filter'
                            value='low'
                            id='low'
                            checked={filter === 'low'}
                        />
                        <label htmlFor='low'>Low to High</label>
                    </div>
                    <div className='filters__check'>
                        <input
                            onChange={handleFilter}
                            type='radio'
                            name='filter'
                            value='high'
                            id='high'
                            checked={filter === 'high'}
                        />
                        <label htmlFor='high'>High to Low</label>
                    </div>

                    <div className='filters__subtitle'>DATE</div>
                    <div className='filters__check'>
                        <input
                            onChange={handleFilter}
                            type='radio'
                            name='filter'
                            value='latest'
                            id='latest'
                            checked={filter === 'latest'}
                        />
                        <label htmlFor='new'>Sort by Latest</label>
                    </div>
                    <div className='filters__check'>
                        <input
                            onChange={handleFilter}
                            type='radio'
                            name='filter'
                            value='created'
                            id='created'
                            checked={filter === 'created'}
                        />
                        <label htmlFor='create'>Sort by Created</label>
                    </div>
                    <div className='filters__check'>
                        <input
                            onChange={handleFilter}
                            type='radio'
                            name='filter'
                            value='edited'
                            id='edited'
                            checked={filter === 'edited'}
                        />
                        <label htmlFor='edit'>Sort by Edited</label>
                    </div>
                </Box>
            </Container>
        </FixedContainer>
    )
}


const Container = styled.div`
    width: clamp(25px, 90%, 270px);
    background-color: white;
    color: black;
    padding: 20px 20px 25px 30px;
    border-radius: 10px;
    
    .filters__close {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 5px;
        svg {
            font-size: 1.3rem;
        }
    }
`

const Box = styled.div`
    margin-top: 20px;
    .filters__subtitle {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 10px;
        color: rgba(0,0,0,0.6);
    }
        
    .filters__check {
        display: flex;
        align-items: center;
        margin-bottom: 4px;
        font-size: 13px;
        font-weight: 500;
        color: rgba(0,0,0,0.9);
        input {
            width: 13px;
            height: 13px;
            margin-right: 8px;
            cursor: pointer;
        }
        label {
            cursor: pointer;
            user-select: none;
        }
    }
`

const TopBox = styled.div`
    display: flex;
    align-items: flex-end;

    .filters__title {
        flex-basis: 25%;
        font-size: 1.2rem;
        font-weight: 500;
        margin-right: 20px;
    }
    .filters__delete {
        color: red;
        cursor: pointer;
        font-weight: 500;
        &:hover {
            font-weight: 600;
        }
    }
`

export default FiltersModal