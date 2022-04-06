import { ADD_TODO } from "./actions";
// state의 모습 구상
// ['코딩', '점심 먹기'];

// function todoApp(previousState, action) {
//   초기값을 설정해주는 부분
//   if (previousState === undefined) {
//     return [];
//   }

//   if (action.type === ADD_TODO) {
//     return [...previousState, action.todo];
//   }

//   return previousState;
// }
const initialState = [];

export function todoApp(previousState = initialState, action) {
  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }

  return previousState;
}
