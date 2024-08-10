import { BiColor } from "react-icons/bi";
import { GiWhiteBook } from "react-icons/gi";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todolist = ({ checked, data, onHandleCheckedTodo,  onHandleDeleteTodo}) => {
    return (
        <li  className="todo-item">
            <span  className={checked ? "checkList" : "notCheckList"} >{data}</span>
                        <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}> 
                                <MdCheck />
                        </button>
                        <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
                                <MdDeleteForever />
                        </button>
        </li>
    );
}