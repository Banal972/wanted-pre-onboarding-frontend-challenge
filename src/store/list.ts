import { createSlice,PayloadAction } from "@reduxjs/toolkit"

export interface ListState {
    id : number
    desc : string
}

const initialState : ListState[] = []

export const listSlice = createSlice({
    name : "list",
    initialState,
    reducers : {
        add : (state, action : PayloadAction<ListState>) =>{
            return [
                ...state,
                action.payload
            ] // spared 문법을 이용해서 추가
        },
        del : (state, action : PayloadAction<number>) =>{
            return state.filter((e)=> e.id !== action.payload); // filter를 이용해서 Delete 기능 구현
        }
    }
});


export const { add, del } = listSlice.actions;

export default listSlice.reducer;