# GameStore
Loja virtual de games desenvolvida com tecnologias modernas de front-end, focada em arquitetura de rotas, componentização e boas práticas de desenvolvimento colaborativo.

## Tecnologias Utilizadas
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [React Router Dom](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Equipe
| Nome | Função |
|------|--------|
| João Gonzales  | RM:568166 |  Tech Líder   |
| Gabriel Ardito | RM:568318 | Desenvolvedor |
| João Sarracine | RM:567407 | Desenvolvedor |
| Felipe Menezes | RM:566607 | Desenvolvedor |

## Funcionalidades
- Página inicial com boas-vindas e apresentação da loja
- Catálogo de produtos (`/produtos`) com no mínimo 4 cards de games
- Cards reutilizáveis contendo: imagem do jogo, título, descrição curta, preço e botão "Comprar"
- Navegação estruturada via React Router Dom
- Página 404 personalizada para rotas inexistentes
- Componentes reutilizáveis: Header (logotipo + menu), Footer (copyright + redes sociais), Card

## Estrutura de Rotas
| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home.jsx | Página inicial com boas-vindas |
| `/produtos` | Produtos.jsx | Catálogo de games com cards |
| `*` | Error.jsx | Página de erro 404 personalizada |

## Fluxo de Desenvolvimento
O projeto segue rigorosamente as melhores práticas de versionamento semântico:
- Commits semânticos obrigatórios (mínimo 10)
- Proibido commits diretos na branch `main`
- Toda nova funcionalidade deve ser desenvolvida em uma branch separada (ex: `feat/setup-rotas`, `feat/componente-header`)
- Integração de código via Pull Requests (PR)

## Como Executar o Projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/CP4-Front-End/CP5-WebDev.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse no navegador: `http://localhost:5173`

## Licença
Este projeto está licenciado sob a **MIT License**.

Copyright (c) 2026 Felipe Menezes, Gabriel Ardito, João Sarracine, João Gonzales


