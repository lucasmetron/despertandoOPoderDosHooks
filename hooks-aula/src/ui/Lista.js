import React, { useReducer } from 'react';
import { myState, MyReducer } from './ListaReducer';


export default function Lista(props) {

    const [list, setList] = useReducer(MyReducer, myState);


    function add() {
        setList({ type: 'ADD' })
    }

    function remove(id) {
        setList({ type: 'REMOVE', payload: id })
    }

    function update(newItem) {
        setList({ type: 'UPDATE', payload: newItem })
    }

    return (
        <>
            <button onClick={add}>ADD</button>


            <ul>
                {list.map(item => (
                    <li onClick={() => { remove(item.id) }} key={item.id}> {item.id}</li>
                ))}
            </ul>
        </>
    );
}