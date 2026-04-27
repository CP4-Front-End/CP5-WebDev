// import {Link} from 'react-router-dom'

const Card = () => {
  return (
    <div className="bg-[#590209] text-white">
      <div className=""></div>
      <div className="bg-[#A60321] rounded-xl p-4 text-center">
        <h3 className={`text-xl font-semibold`}>Título</h3>
        <div className="text-sm bg-[#025373] mt-2 font-bolder rounded">Descrição
        <img src="../assets/godofwar.jpg" alt="Jogo" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Card;
