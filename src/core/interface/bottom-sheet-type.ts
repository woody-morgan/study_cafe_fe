export type MenuSelectSheet = 'MENUSELECT';

export type SheetType = MenuSelectSheet;

export type BottomSheetInfoType = {
  isOpen: boolean;
  name: SheetType | null;
  activeOverlay: boolean;
  option?: unknown;
};
