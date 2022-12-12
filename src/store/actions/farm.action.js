export const SELECTED_FARM = "SELEC_FARM";
export const FILTERED_FARM = "FILTERED_FARM";

export const selectFarm = (id) => ({
  type: SELECTED_FARM,
  farmID: id,
});

export const filteredFarm = (id) => ({
  type: FILTERED_FARM,
  categoryID: id,
});




