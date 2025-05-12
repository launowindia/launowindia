import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Order {
  id: string;
  status: string;
  [key: string]: any;
}

interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders(state, action: PayloadAction<Order[]>) {
      state.orders = action.payload;
    },
    addOrder(state, action: PayloadAction<Order>) {
      state.orders.unshift(action.payload);
    },
    updateOrder(state, action: PayloadAction<Order>) {
      const idx = state.orders.findIndex(o => o.id === action.payload.id);
      if (idx !== -1) state.orders[idx] = action.payload;
    },
  },
});

export const { setOrders, addOrder, updateOrder } = orderSlice.actions;
export default orderSlice.reducer; 