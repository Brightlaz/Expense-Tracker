import { proxy } from "valtio";

const state = proxy({
  isNewCard: false,
  isNewBudget: false,
});

export default state;
