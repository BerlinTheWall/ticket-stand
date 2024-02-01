import { ContextValue } from "@/types/general";
import { createContext } from "react";

export const AppContext = createContext<ContextValue | null>(null);
