import React, { useState } from 'react';

export default function Lista(props) {

    const [list, setList] = useState([]);

    function add() {
        const newItem = { id: Date.now() }
        const newList = [...list, newItem]
        setList(newList)
    }

    function remove(id) {
        const newList = list.filter(item => item.id !== id)
        setList(newList)
    }

    function update(newItem) {
        const newList = list.map(item => (item.id != newItem.id ? item : newItem))
        setList(newList)
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