import List from "./components/List/List";
import { useAppDispatch, useAppSelector } from './app/hook';
import { useState } from "react";
import { add } from "./store/list";
import Btn from "./components/Btn/Btn";

function App() {

  const list = useAppSelector(state=>state.lists);
  const dispatch = useAppDispatch();

  const [input,setInput] = useState('');

  // Add 버튼 이벤트
  const onAddHandler = ()=>{

    if(input === ""){
      return alert('값을 입력해주세요');
    }

    const data = {
      id : Date.now(),
      desc : input
    }
    dispatch(add(data));
    setInput('');

  }
  
  // Enter 키 이벤트
  const onKeyDown = (e : React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key === "Enter"){
      onAddHandler();
    }
  }

  return (
    <main className='container mx-auto text-fontColor py-8 px-4'>
      <div className="block sm:flex">
        <input 
          className= 'w-full border-2 py-3 px-8 text-fontColor bg-background rounded-lg box-border sm:flex-1 sm:mr-24'  
          type="text " 
          placeholder='input'
          value={input}
          onInput={(e)=>setInput(e.currentTarget.value)}
          onKeyDown={(e)=>onKeyDown(e)}
        />
        <Btn className="my-5 sm:my-0" onClick={onAddHandler}>Add</Btn>
      </div>
      {
        list.map((el,index)=><List key={index} state={el}/>)
      }
    </main>
  );
}

export default App;
