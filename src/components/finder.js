'use client'
import React, { useState } from 'react';
import { participantes } from "../../data";
import { Input } from "@nextui-org/input";

const Finder = () => {
    const [email, setEmail] = useState('');

    return (
        React.createElement('div', null,
            React.createElement('div', { className: "flex w-full flex-wrap content-center justify-center px-7" },
                React.createElement('div', { className: "grid grid-cols-2 gap-3 md:grid-cols-3" },
                    React.createElement(Input, {
                        type: "email",
                        value: email,
                        onChange: (e) => setEmail(e.target.value),
                        placeholder: "Enter your email"
                    }),
                    participantes.map((tricket, index) => {
                        if (tricket.email === email) {
                            return (
                                React.createElement('div', { className: "max-w-xsborder", key: index },
                                    React.createElement('div', { className: 'p-1 text-left' },
                                        React.createElement('h3', { className: `mx-auto mb-2 text-xl text-center md:text-6xl md:mx-0 md:mb-8 tracking-wide` },
                                            `Compraste ${tricket.boletas} boletas`
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

