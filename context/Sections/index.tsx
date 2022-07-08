import { parseCookies } from 'nookies';
import { createContext, ReactNode, useEffect, useState } from 'react';

export const ContextSections = createContext({} as ContextSectionsValues);

interface ContextSectionsValues {
    handleLoopNoSection: () => void,
    isNoSection: boolean
}

interface ProviderSectionProps {
    children: ReactNode
}

export default function ProviderSection({ children }: ProviderSectionProps) {

    const [ isNoSection, setIsNoSection ] = useState<boolean>(false);

    const [ loopNoSection, setLoopNoSection ] = useState<boolean>(false);

    useEffect(() => {
        const { ['no-section']: noSection } = parseCookies(null);

        if(noSection) {
            return setIsNoSection(true);
        }

        return setIsNoSection(false);

    }, [loopNoSection])

    
    function handleLoopNoSection() {
        setLoopNoSection(!loopNoSection);
    }

    return (
        <ContextSections.Provider value={{
            handleLoopNoSection: handleLoopNoSection,
            isNoSection
        }}>

            { children }

        </ContextSections.Provider>
    )
}

