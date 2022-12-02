export const selectIncrementWishList = (state) => state.wishlist.watch;
console.log(selectIncrementWishList);

export const selectWishListCount = (state) => state.wishlist.watch.length;
console.log(selectWishListCount);
export const selectincrease = (state) => state.wishlist.value;

export const selectIsInWatchList = (id, state) => {
  const found = selectIncrementWishList(state).find((item) => {
    return item?.id === id;
  });

  if (found) {
    return true;
  }
  return false;
};
