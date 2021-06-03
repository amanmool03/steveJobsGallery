import React from 'react';
import '../footer/footer.scss'

const addresses = [
    {
        town: "Amsterdam",
        address: "IJpromenade 1, 1031 KT Amsterdam, Netherlands",
        phone: "+312 058 91400",

    },
    {
        town: "London",
        address: "Westminster, London SW1A 0AA, United Kingdom",
        phone: "+442 072 468350",

    },
    {
        town: "Zürich",
        address: "Museumstrasse 2, 8001 Zürich, Switzerland",
        phone: "+414 421 86511",

    },
];

export default function Footer() {
    return (
        <div className='footer'>
            <div className='box'>
                <i class="fab fa-apple logo" aria-hidden='true'></i>
            </div>
            <div className='contact-address'>
                {addresses.map((info) => {
                    return (
                        <div key='info.town'>
                            <h1>{info.town}</h1>
                            <div>
                                {info.address.split(',').map(element => (<p key={element}>{element}</p>))}
                            </div>
                            <p>{info.phone}</p>
                            <p>{info.email}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
