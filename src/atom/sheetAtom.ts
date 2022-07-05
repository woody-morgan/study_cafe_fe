import { atom, selector } from 'recoil'
import React from 'react'

/**
 * @param {boolean} isOpen - Whether the sheet is open or not
 * @param {boolean} activeOverlay - Whether close the portal when click outside of the sheet
 * @param {unknown[] | null} option - The options for the sheet content
 */
export type SheetShape = {
  isOpen: boolean
  activeOverlay: boolean
  children: React.ReactNode | null
  option?: unknown | null
}

const sheetInitialState: SheetShape = {
  isOpen: false,
  activeOverlay: true,
  children: null,
  option: null,
}

const sheetState = atom<SheetShape>({
  key: 'sheetState',
  default: sheetInitialState,
})

const sheetSelector = selector({
  key: 'sheetSelector',
  // add custom getter later
  get: ({ get }) => get(sheetState),
})

export { sheetInitialState, sheetState, sheetSelector }
