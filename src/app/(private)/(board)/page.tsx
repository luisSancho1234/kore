'use client';

import { useRouter } from "next/navigation";

export default function Board() {

  const router = useRouter()

  const logOut = () => {
      router.replace('/sign-in'); 
      console.log("navigated")
  };
  
  return (
    <div>
      <p>Board</p>
      <button onClick={logOut}>Sign-out</button>
    </div>
  );
}

