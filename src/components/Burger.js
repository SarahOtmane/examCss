import { TbMenu } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import { FaBellConcierge } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { MdSystemUpdateAlt } from "react-icons/md";
import { GoMoveToEnd } from "react-icons/go";


function Burger (){
    return <div>
        <TbMenu />
        <div className="blur">
            <div className="container">
                <IoCloseOutline />
                <div className="up">
                    <a>
                        <FaBellConcierge />
                        <p>Service</p>
                    </a>
                    <a>
                        <RiAdminFill />
                        <p>Administrateur</p>
                    </a>
                </div>
                <div className="down">
                    <a>
                        <MdSystemUpdateAlt />
                        <p>Modifier le service</p>
                    </a>
                    <a>
                        <GoMoveToEnd />
                        <p>Fermer le service</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
}

export default Burger;