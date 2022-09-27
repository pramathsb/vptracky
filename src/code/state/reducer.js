export function rootReducer(state, action) {
  switch (action.type) {
    case "ADD_CONTENT":
      return { ...state, TXT: action.payload };
    case "SHOW_LOADER":
      return { ...state, loader: true };
    case "HIDE_LOADER":
      return { ...state, loader: false };
    case "UPDATE_VEHICLE_LIST":
      return { ...state, vehicleList: action.payload };
    case "SELECT_VEHICLE":
      return { ...state, vehicleId: action.payload };
    default:
      throw new Error();
  }
}
