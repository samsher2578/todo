import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMinus } from "@fortawesome/free-solid-svg-icons";
// import { faX } from "@fortawesome/free-solid-svg-icons";

const ToDoList = (props) => {
    return(
        <div className="todo_style">
        {/* <FontAwesomeIcon className="faMinus" icon={faMinus} /> */}
        {/* <FontAwesomeIcon className="faX" icon={faX} /> */}
            <div className="faX" onClick={()=> {props.onSelect(props.id)}}><b>X</b></div>
            <li>{props.text}</li>
        </div>
    );
};

export default ToDoList;
