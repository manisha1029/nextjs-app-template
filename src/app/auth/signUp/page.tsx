"use client";
import { useState } from "react";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import TextInput from "@/src/components/ui/TextInput";

function SignUp() {
  // Variables.
  const dispatch = useAppDispatch();
  const select = useAppSelector((state) => state);

  // States.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(!name || !email || !password){
      return 
    }
    const formData = { name, email, password };
    console.log("form data:", formData);
    toast.success("Registered Succesfully!!!", {
        type:'success',
      position: "top-right",
    });
    setName('');
    setEmail('');
    setPassword('');
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
            isRequired={true}
          />

          <TextInput
            type="email"
            label="Email"
            placeholder="john@example.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isRequired={true}
          />

          <TextInput
            type="password"
            label="Password"
            placeholder="••••••••"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isRequired={true}
          />

          <button
            type="submit"
            className="w-full rounded-md bg-primary py-2.5 text-white font-medium hover:bg-primary-hover transition cursor-pointer"
          >
            Register
          </button> 
        </form>
      </div>
    </div>
  );
}

export default SignUp;
