import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './services/rootReducer';
const rootStore = configureStore({
  reducer: rootReducer,
});

export default rootStore;
export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
