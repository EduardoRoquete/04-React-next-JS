"use client";

import Link from 'next/link';
import { useContador } from '../../context/ContadorContext';

export default function Incrementar() {
    const { valor, incrementar } = useContador();

    return (
        <main className="p-4">
            <p>Valor: {valor}</p>
            <button onClick={incrementar} className="w-full py-3 my-3 rounded-lg text-white bg-blue-700">Incrementar</button>
            <br />
            <Link href="/">
                <button className="w-full py-3 my-3 rounded-lg text-white bg-blue-700">Voltar</button>
            </Link>
        </main>
    );
}