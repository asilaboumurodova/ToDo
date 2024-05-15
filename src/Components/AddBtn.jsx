import editImg from "@i/edit.svg";
import { useContext } from "react";
import { Context } from "../context/Context";

function AddBtn() {
  const {modal, setmodal} = useContext(Context)
  return (
    <button className="add-btn" onClick={()=>setmodal(true)}>
        <img src={editImg} alt="" />
    </button>
  )
}

export default AddBtn