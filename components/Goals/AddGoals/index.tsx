import { 
    ContainerAddGoals, 
    DatesForm, 
    Date, 
    ChooseGoals
} from "./style";

import { Title } from "../../../styles/style";
import { Input } from "../../Input";

export function GoalsAddGoals() {
    return (
        <ContainerAddGoals>
            <Title>
                Adicionar uma nova meta
            </Title>
            <form>
                <Input type="text" placeholder="Digite o nome da meta" required />

                <DatesForm>
                    <Date>
                        <label htmlFor="starstAt">Começa em:</label>
                        <input type="date" id="starstAt" required />
                    </Date>
                    <Date>
                        <label htmlFor="endsIn">Termina em:</label>
                        <input type="date" id="endsIn" required />
                    </Date>
                </DatesForm>

                <ChooseGoals>
                    <h4>Finalizar isso...</h4>
                </ChooseGoals>

            </form>
        </ContainerAddGoals>
    )
}