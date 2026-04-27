import { Link } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />

      <main className="bg-[#590209] text-white">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Joga Fofo
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Descubra um universo de jogos com os melhores títulos, lançamentos e experiências.
          </p>

          <Link
            to="/jogos"
            className="bg-[#F20530] hover:bg-[#A60321] px-8 py-4 rounded-xl font-semibold transition"
          >
            Explorar Jogos
          </Link>
        </section>

        {/* SEÇÃO AZUL (contraste visual) */}
        <section className="bg-[#025373] py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              Categorias
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-[#03588C] p-6 rounded-2xl hover:scale-105 transition">
                <h3 className="text-xl font-semibold mb-3">Ação</h3>
                <p className="text-gray-200">
                  Jogos rápidos, intensos e cheios de adrenalina.
                </p>
              </div>

              <div className="bg-[#03588C] p-6 rounded-2xl hover:scale-105 transition">
                <h3 className="text-xl font-semibold mb-3">RPG</h3>
                <p className="text-gray-200">
                  Histórias profundas e evolução de personagem.
                </p>
              </div>

              <div className="bg-[#03588C] p-6 rounded-2xl hover:scale-105 transition">
                <h3 className="text-xl font-semibold mb-3">Esportes</h3>
                <p className="text-gray-200">
                  Competição e habilidade em alto nível.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* DESTAQUES */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Destaques
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-black/40 border border-[#A60321] rounded-2xl p-6 hover:border-[#F20530] transition">
              <h3 className="text-xl font-semibold mb-3 text-[#F20530]">Lançamentos</h3>
              <p className="text-gray-400">
                Os jogos mais recentes do mercado.
              </p>
            </div>

            <div className="bg-black/40 border border-[#A60321] rounded-2xl p-6 hover:border-[#F20530] transition">
              <h3 className="text-xl font-semibold mb-3 text-[#F20530]">Populares</h3>
              <p className="text-gray-400">
                O que está bombando agora.
              </p>
            </div>

            <div className="bg-black/40 border border-[#A60321] rounded-2xl p-6 hover:border-[#F20530] transition">
              <h3 className="text-xl font-semibold mb-3 text-[#F20530]">Recomendados</h3>
              <p className="text-gray-400">
                Sugestões personalizadas.
              </p>
            </div>

          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-[#A60321] py-20 text-center px-6">
          <h2 className="text-3xl font-bold mb-6">
            Bora jogar?
          </h2>

          <Link
            to="/jogos"
            className="bg-white text-[#590209] px-10 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Acessar Catálogo
          </Link>
        </section>

      </main>

      <Footer />
      <Header/>
    <div className='bg-[#590209] text-white'>
      <div>

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home