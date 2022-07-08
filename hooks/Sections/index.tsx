import { useContext } from "react";
import { ContextSections } from '../../context/Sections';

export function useSections() {
    return useContext(ContextSections);
}