import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios";


type SneakerItem = {
    id: number;
    imageUrl: string;
    title: string;
    price: number
}

type FetchSneakerParams = {
    search: string
}

export const fetchSneaker = createAsyncThunk<SneakerItem[], FetchSneakerParams>('pizza/fetchSneakersStatus', async (params) => {
    const { search } = params;
    const res = await axios.get<SneakerItem[]>(
      `https://6422c50577e7062b3e2226f6.mockapi.io/items?&sortBy=${search}`,
    );
    return res.data;
  });

enum Status{
    LOADING = 'loading',
    SUCCES = 'succes',
    ERROR = 'error'
  }

interface SneakersSliceState {
    items: SneakerItem[];
    status: Status
}

const initialState: SneakersSliceState = {
    items: [],
    status: Status.LOADING
}

const sneakersSlice = createSlice({
    name: 'sneaker',
    initialState,
    reducers: {
        addItem(state, action) {
            state.items = action.payload;
          },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSneaker.pending, (state) => {
          state.status = Status.LOADING;
          state.items = [];
        });
        builder.addCase(fetchSneaker.fulfilled, (state, action: PayloadAction<SneakerItem[]>) => {
          state.status = Status.SUCCES;
          state.items = action.payload;
        });
        builder.addCase(fetchSneaker.rejected, (state) => {
          state.status = Status.ERROR;
          state.items = [];
        });
      },
})

export const {addItem} = sneakersSlice.actions

export default sneakersSlice.reducer