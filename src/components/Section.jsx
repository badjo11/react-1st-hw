import React, { useState } from "react"
import Input from "./Input";
import View from "./View";

const Section = () => {
    const [todos, setTodos] = useState([]);
    function addTask(task) {
        let obj = {
            title: task,
            id: Date.now(),
        };
        let todosArr = [...todos, obj]
        setTodos(todosArr)
    }
    console.log(todos)
    return (
        <>
            <Input addTask={addTask} />
            <View todos={todos} />
            <img src="https://worksolutions.ru/storage/UxBYDUfBNl9RfD5r6wMDvAWke3mGTfZaDcmHGZWc.png" alt="" />
        </>
    );
};

export default Section;