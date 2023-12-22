// import

export default function RegisterPage() {
  return (
    
    <form className="register  max-w-md mx-0 my-auto ">
        <h1 className="text-center font-bold text-4xl mb-4">Register</h1>
      <input type="text" placeholder="username" className="block mb-1.5 w-full p-1.5 px-3  border-2 border-solid bg-slate-200 rounded-md" />
      <input type="password" placeholder="password" className="block mb-1.5 w-full p-1.5  px-3 border-2 border-solid bg-slate-200 rounded-md" />

      <button className="p-1.5 w-full bg-slate-600 text-white block border-2 rounded-md">Register</button>
    </form>
  );
}
