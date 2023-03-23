import { StoreItems, UserInfo } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface amazonState {
  productData: StoreItems[];
  userInfo: null | UserInfo;
}

const initialState: amazonState = {
  productData: [],
  userInfo: null,
};

export const nextSlice = createSlice({
  name: "nextamazon",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item: StoreItems) => item._id === action.payload._id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.productData.find(
        (item: StoreItems) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuntity: (state, action) => {
      const item = state.productData.find(
        (item: StoreItems) => item._id === action.payload._id
      );
      if (item?.quantity === 1) {
        item.quantity = 1;
      } else {
        item!.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuntity,
  deleteItem,
  resetCart,
  addUser,
  removeUser,
} = nextSlice.actions;
export default nextSlice.reducer;
