import { ADDPERSON } from "../constant";
const initState = [{ name: "test", age: 18, id: "001" }];
export default function personReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADDPERSON:
      return [data, ...preState];
    default:
      return preState;
  }
}
