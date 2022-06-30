import { ContainerUser } from "./style";

import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

export function User() {

    const [ firstName, setFirstName ] = useState<string | null>(null);

    useEffect(() => {
        const { ['name_user']: name } = parseCookies(null);
        const firstNamee = name.split(' ')[0];
        
        if(firstNamee?.length >= 8) {
            const cutName = firstNamee?.slice(0, 8);
            return setFirstName(cutName + '...');
        }

        return setFirstName(firstNamee);
    }, []);

    return (
        <ContainerUser>
            <span>{ firstName && firstName }</span>
        </ContainerUser>
    )
}