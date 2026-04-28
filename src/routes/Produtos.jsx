import Header from "../components/Header"
import Footer from "../components/Footer"
import Card from "../components/Card";
const produtos = [
  {
    id: 1,
    imagem: "https://imgs.search.brave.com/ENDmz4yEWpSAiA2mGX_pT2OK2ONIXOf7aB45ZcbhDaA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmludGVuZG8u/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8v/cV9hdXRvL2Rwcl8x/LjUvc3RvcmUvc29m/dHdhcmUvc3dpdGNo/LzcwMDEwMDAwMDI5/MDM1LzUyZjE3OTlk/MzIwNzIxMDdmOWYw/ZWNhZDk2ZmI4MzNj/NGEwODUwYjdlMWNj/NmIxYzdjYTYzMGI5/Zjg5ZGQyYTA",
    nome: "Crash Bandicott 4",
    descricao: "Um clássico do Playstation 2 retorna novamente com grandes aventuras e diversões.",
    categoria: "Aventura 3D",
    precoOriginal: "R$ 199,90",
    preco: "R$ 149,90",
  },
  {
    id: 2,
    imagem: "https://i.ytimg.com/vi/ZOk3fj5ujNM/maxresdefault.jpg",
    nome: "Sack Boy",
    descricao: "O querido mascote da série LittleBig Planet está de volta em uma nova aventura!",
    categoria: "Diversão em família",
    precoOriginal: "R$ 69,90",
    preco: "R$ 59,90",
  },
  {
    id: 3,
    imagem: "https://imgs.search.brave.com/w-BoYZY3LquggM4N6mko0fQBJIYDQZDp0vi29g9rmss/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC84Lzcv/NS82NjMtMzg0MHgy/MTYwLWRlc2t0b3At/NGstcmVkLWRlYWQt/cmVkZW1wdGlvbi13/YWxscGFwZXItcGhv/dG8uanBn",
    nome: "Red Dead Redemption 2",
    descricao: "No velho oeste aonde as gangues começam a ser caçadas e seu objetivo é liderar a maior gangue do Texas.",
    categoria: "Mais comprado",
    precoOriginal: "R$ 249,90",
    preco: "R$ 199,90",
  },
  {
    id: 4,
    imagem: "https://imgs.search.brave.com/19FyznLSJekXM9n3pLzsC2tjLEFM5TJRBRzVrl-_TTM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWluZWNyYWZ0Lm5l/dC9jb250ZW50L2Rh/bS9taW5lY3JhZnRu/ZXQvZ2FtZXMvbWlu/ZWNyYWZ0L2tleS1h/cnQvSG9tZXBhZ2Vf/RGlzY292ZXItb3Vy/LWdhbWVzX01DLVZh/bmlsbGEtS2V5QXJ0/Xzg2NHg4NjQuanBn",
    nome: "Minecraft",
    descricao: "Um mundo sandbox aonde a sua criatividade toma conta da jogatina, bem vindo ao Minecraft.",
    categoria: "Venha se aventurar",
    precoOriginal: "R$ 109,90",
    preco: "R$ 79,90",
  },
];

const Produtos = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#590209] flex items-start justify-center p-6 gap-4">
        {produtos.map((produto) => (
          <Card key={produto.id} {...produto} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Produtos;