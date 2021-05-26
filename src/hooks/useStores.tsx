import { useContext } from "react";
import { rootStoreContext } from "../stores";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useStores = () => useContext(rootStoreContext);