import { RootDispatchType, RootStateType } from '@src/store/modules'
import { useDispatch, useSelector } from 'react-redux'

type StateSelector<T> = (state: RootStateType) => T
type EqualityFn<T> = (left: T, right: T) => boolean

// Typed Selector Hook
export function useRootState<T>(selector: StateSelector<T>, equalityFn?: EqualityFn<T>) {
  return useSelector(selector, equalityFn)
}

// Typed Dispatch Hook
export const useRootDispatch = () => useDispatch<RootDispatchType>()
