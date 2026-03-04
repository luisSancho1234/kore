'use-client'

export default function SignIn() {
  return (
    <div className="bg-linear-to-tr from-[#248a87] to-[#11545100]">
      <div className="flex flex-col-reverse sm:flex-row h-fit w-full">
        <div className="flex-2 md:flex-1">
          CONTENT
        </div>
        <div className="flex flex-col gap-10 h-screen flex-1 justify-center items-center bg-black/60">
          <p className="font-bold text-5xl drop-shadow-2xl">
            Sign-in
          </p>
          
          <div className="flex flex-col w-80 items-end gap-6">
            <input placeholder="E-mail" className="text-xl border border-[#157F7E] rounded-md px-2 py-1 w-full"/>
            <input placeholder="Senha" className="text-xl border border-[#157F7E] rounded-md px-2 py-1 w-full"/>
            <div className="flex gap-2">
              <button className="text-xl border w-fit rounded-lg px-2 py-1 hover:text-emerald-800 hover:bg-emerald-500"> Button </button>
              <button className="text-xl border w-fit rounded-lg px-2 py-1 hover:text-emerald-800 hover:bg-emerald-500"> Button </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
