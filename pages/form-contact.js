function Formcontact() {
  return (
    <div className="w-full h-screen bg-zinc-800">
      <div className="w-full h-14 bg-black flex items-center justify-between border-b border-white">
        <div>
          <h1 className="text-3xl text-white font-bold pl-6">Next Project</h1>
        </div>
        <div className="text-white pr-6">
          <ul className="flex gap-5">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/form-contact">Form Contat</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-1/2 h-3/4 bg-white p-10 -translate-x-1/2 left-1/2 top-6 rounded-xl relative">
        <div className="p-4">
          <h1 className="text-xl text-center">
            Envie sua dica ou critica para esse projeto
          </h1>
        </div>
        <div>
          <p className="pl-3 text-zinc-500">Nome de Usuario:</p>
          <input
            type="text"
            className="border rounded-md pl-4 w-full h-10 mb-5 outline-none text-zinc-600"
            placeholder="Nome"
          />
          <p className="pl-3 text-zinc-500">Email para retorno:</p>
          <input
            type="text"
            className="border rounded-md pl-4 w-full h-10 mb-5 outline-none text-zinc-600"
            placeholder="Email"
          />
          <p className="pl-3 text-zinc-500">Envie sua opnião:</p>
          <textarea
            type="text"
            className="border rounded-md pl-4 w-full h-10 resize-y mb-5 outline-none text-zinc-600"
            placeholder="Dica ou Critica"
          />
        </div>
        <div className="w-full grid justify-center items-center">
          <button className="bg-gray-900 p-3 w-28 text-white rounded-lg">
            Enviar
          </button>
        </div>
      </div>
      <div className="w-full h-14 bg-black border-t border-white text-center text-white absolute bottom-0">
        <p>Fernando Nunes</p>
        <a href="https://github.com/fernandonunessil" target="_blank">
          Github Profile
        </a>
      </div>
      {/*Footer*/}
    </div>
  );
}

export default Formcontact;
