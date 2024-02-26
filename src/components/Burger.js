import { TbMenu } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import { FaBellConcierge } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { MdSystemUpdateAlt } from "react-icons/md";
import { GoMoveToEnd } from "react-icons/go";
import React, { useState } from 'react';


function Burger (){

    const [isActive, setIsActive] = useState(false);

    const handleAddClass = () => {
        setIsActive(true);
    };

    const handleRemoveClass = () => {
        setIsActive(false);
    };

    return <div className="burger">
        <TbMenu className="openMenu" onClick={handleRemoveClass} />
        <div className={`blur ${isActive ? '' : 'isBlur'}`}>
            <div className={`container ${isActive ? 'disappear' : ''}`}>
                <IoCloseOutline className="closeMenu" onClick={handleAddClass} />
                <div className="up">
                    <a className="link">
                        <FaBellConcierge className="size big" />
                        <p>Service</p>
                    </a>
                    <a className="link">
                        <RiAdminFill className="size big" />
                        <p>Administrateur</p>
                    </a>
                </div>
                <div className="down">
                    <a className="link">
                        <p>Modifier le service</p>
                        <MdSystemUpdateAlt className="size small" />
                    </a>
                    <a className="link">
                        <p className="red">Fermer le service</p>
                        <GoMoveToEnd className="size small red" />
                    </a>
                </div>
            </div>
        </div>
    </div>
}

export default Burger;