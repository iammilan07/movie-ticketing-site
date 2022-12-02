import { incrementer, removeWishList } from "./slice";

// export const adder = (props) => (dispatch) => {
//   const incrementWishList = useSelector(selectIncrementWishList);
//   dispatch(addToWishList(props));
//   dispatch(incrementWishList());
// };

export const remover = (id) => (dispatch) => {
  dispatch(removeWishList(id));
};

export const handlechange = () => {
  incrementer();
};
export const incrementerr = () => (dispatch) => {
  dispatch(incrementer());
};
