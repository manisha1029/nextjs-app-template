'use client'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '@/src/redux/store';
import TextInput from '@/src/components/ui/TextInput';

function Page() {
    // Variables.
    const dispatch = useDispatch<AppDispatch>();
    const userState = useSelector(state=> state);

    // States.
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = { name, email, password }
        console.log('form data:', formData);
        // const response = dispatch()
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-semibold text-center mb-6">
                    Create your account
                </h1>

                <form onSubmit={handleRegister} className="space-y-5">
                    <TextInput
                        type="text"
                        label="Full Name"
                        placeholder="John Doe"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextInput
                        type="email"
                        label="Email"
                        placeholder="john@example.com"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextInput
                        type="password"
                        label="Password"
                        placeholder="••••••••"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="w-full rounded-md bg-blue-600 py-2.5 text-white font-medium hover:bg-blue-700 transition cursor-pointer"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Page
