type CursorState = 'default' | 'hover' | 'click';

export const uiStore = {
  cursor: 'default' as CursorState,
  setCursor(state: CursorState) {
    this.cursor = state;
  }
};
