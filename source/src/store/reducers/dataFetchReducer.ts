import { dataFetchSlice } from '../slices/dataFetchSlice'
import { RootState } from '../types'

export const selectDataFetchLoading = (state: RootState) =>
	state.dataFetch.loading
export const selectMessageAfterDataFetch = (state: RootState) =>
	state.dataFetch.messageAfterDataFetch
export const selectIsError = (state: RootState) => state.dataFetch.isError

export default dataFetchSlice.reducer
