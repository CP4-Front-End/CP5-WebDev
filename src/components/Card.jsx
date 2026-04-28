const Card = ({ imagem, nome, descricao, categoria, precoOriginal, preco }) => {
  return (
    <div className="w-64 h-[480px] bg-[#F20530] rounded-2xl overflow-hidden shadow-xl border border-zinc-800 hover:scale-105 transition duration-300 flex flex-col">
     <img src={imagem} alt={nome} className="w-full h-44 object-cover object-top" />
      <div className="p-5 text-white flex flex-col flex-1 justify-between">
        <div>
          <span className="bg-[#03588C] text-sm px-3 py-1 rounded-full w-fit">
            {categoria}
          </span>
          <h2 className="text-base font-bold mt-1">{nome}</h2>

          <p className="text-white mt-2 text-sm">{descricao}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex justify-between w-full">
            <div>
              <p className="text-gray-300 line-through text-sm">{precoOriginal}</p>
              <p className="text-white text-2xl font-bold">{preco}</p>
            </div>
          </div>
          <button className="bg-[#03588C] hover:bg-[#025373] hover:scale-105 transition-all duration-300 px-5 py-2 rounded-xl font-semibold w-full">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;