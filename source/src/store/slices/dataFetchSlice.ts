import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface DataFetchState {
	loading: boolean
	messageAfterDataFetch: string
	isError: boolean
}

const initialState: DataFetchState = {
	loading: false,
	messageAfterDataFetch: '',
	isError: false,
}

export const dataFetchSlice = createSlice({
	name: 'dataFetch',
	initialState,
	reducers: {
		setDataFetchLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload
		},
		setMessageAfterDataFetch: (state, action: PayloadAction<string>) => {
			state.messageAfterDataFetch = action.payload
		},
		setIsError: (state, action: PayloadAction<boolean>) => {
			state.isError = action.payload
		},
	},
})

export const { setDataFetchLoading, setMessageAfterDataFetch, setIsError } =
	dataFetchSlice.actions
