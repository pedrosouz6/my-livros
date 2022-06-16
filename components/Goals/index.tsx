import { useState } from "react";
import { Container } from "../../styles/style";

import { GoalsAddGoals } from './AddGoals';
import { GoalsAllGoals } from './AllGoals';

import { Choose } from "./style";

export function Goals() {

    const [ addGoals, setAddGoals ] = useState<boolean>(true);

    return (
        <Container>
            <Choose>
                <button 
                onClick={() => setAddGoals(true)}
                className={addGoals ? 'active' : ''}>
                    Adicionar metas
                </button>

                <button
                onClick={() => setAddGoals(false)}
                className={!addGoals ? 'active' : ''}>
                    Ver minhas metas
                </button>
            </Choose>

            { 
                addGoals ? 
                <GoalsAddGoals /> :
                <GoalsAllGoals />
            }

        </Container>        
    )
}