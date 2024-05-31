'use client'
import React, { useState } from 'react';
import { participantes } from "../../data";
import { Input } from "@nextui-org/input";

const Finder = () => {
    const [email, setEmail] = useState('');

    return (
        React.createElement('div', null,
            React.createElement('div', { className: "continer-finder" },
                React.createElement('div', { className: "container-input" },
                    React.createElement(Input, {
                        type: "email",
                        value: email,
                        onChange: (e) => setEmail(e.target.value),
                        placeholder: "Ingresa tu correo"
                    }),
                    participantes.map((tricket, index) => {
                        if (tricket.email.toLowerCase() === email.toLowerCase()) {
                            return (
                                React.createElement('div', { className: "max-w-xsborder", key: index },
                                    React.createElement('div', { className: 'p-1 text-left' },
                                        React.createElement('h3', { className: `mx-auto mb-2 text-xl text-center md:text-6xl md:mx-0 md:mb-8 tracking-wide` },
                                            `Hola ${tricket.nombre} compraste ${tricket.boletas} boleta(s), mucha suerte`
                                        )
                                    )
                                )
                            )
                        }
                        return null;
                    })
                ),
            )
        )
    );
}

export default Finder;

