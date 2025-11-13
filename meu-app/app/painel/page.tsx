"use client";

import Link from 'next/link';
import { useContador } from '../../context/ContadorContext';

export default function Painel() {
    const { valor } = useContador();

    return (
        <main className="p-4">
            <p>Valor: {valor}</p>
            <Link href="/incrementar">
                <button className="w-full py-3 my-3 rounded-lg text-white bg-blue-700">Ir para incrementar</button>
            </Link>
        </main>
    );
}