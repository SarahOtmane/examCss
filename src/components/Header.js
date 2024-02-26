import React, { useState, useEffect } from 'react';

function Header(){
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentDate(new Date());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

    return(
        <header>
            <article>
                <p>{currentDate.toLocaleDateString()}</p>
                <h1>Test</h1>
            </article>
        </header>
    )
}

export default Header;