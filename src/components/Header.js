import React, { useState, useEffect } from 'react';
import Burger from './Burger';

function Header({ titre }) {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const getDayOfWeek = (date) => {
        const options = { weekday: 'long' };
        return new Intl.DateTimeFormat('fr-FR', options).format(date);
    };

    const getDayOfMonth = (date) => {
        return date.getDate();
    };

    const getMonth = (date) => {
        const options = { month: 'long' };
        return new Intl.DateTimeFormat('fr-FR', options).format(date);
    };

    return (
        <header>
            <article>
                <p>
                    {getDayOfWeek(currentDate)}, {getDayOfMonth(currentDate)} {getMonth(currentDate)}
                </p>
                <h1>{titre}</h1>
            </article>
            <Burger />
        </header>
    );
}

export default Header;
