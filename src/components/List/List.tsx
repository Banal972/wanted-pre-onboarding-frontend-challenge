import { useAppDispatch } from "../../app/hook"
import { ListState, del } from "../../store/list"
import Btn from "../Btn/Btn";

type Props = {
  state : ListState
}

function List({state} : Props) {

  const dispatch = useAppDispatch();

  // Del 이벤트
  const onDeleteHanlder = (id : number)=>{
    dispatch(del(id));
  }

  return (
    <div className='flex border-2 py-4 px-8 justify-between rounded-lg mt-10'>
        {state.desc}
        <Btn onClick={()=>onDeleteHanlder(state.id)}>Delete</Btn>
    </div>
  )
}

export default List