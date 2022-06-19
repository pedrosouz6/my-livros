import Image from "next/image";
import Link from "next/link";
import ImageLogo from '../../../assets/LogoMyLivros.png';
import { LinkA } from "../../../styles/style";

import { ContainerCenter } from "../../../styles/style";
import { 
    ContainerHeader, 
    Header,
    ButtonLogin ,
    ButtonRegister
} from "./style";

export function PublicHeader() {
    return (
        <Header>
            <ContainerCenter>
                <ContainerHeader>
                    <div>
                        <Image src={ImageLogo} alt='Logo MyLivros' />
                    </div>

                    <nav>
                        <ul>
                            <li>
                               <ButtonLogin>
                                    <Link href='/login'>
                                        Login
                                    </Link>
                               </ButtonLogin>
                            </li>
                            <li>
                                <ButtonRegister>
                                    <Link href='/register'>
                                        Registrar
                                    </Link>
                                </ButtonRegister>
                            </li>
                        </ul>
                    </nav>
                </ContainerHeader>
            </ContainerCenter>
        </Header>
    )
}