import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto py-12 px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-[#F20530] mb-4">Joga Fofo</h3>
            <p className="text-white text-sm max-w-md leading-relaxed">
              Descubra um universo de jogos para todos os estilos, diversão garantida com nosso catálogo de jogos!
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-[#F20530] mb-4">Navegue</h4>
            <ul className="space-y-3">
              <li><Link to="" className="text-white hover:text-[#03588C] transition-[color] duration-500">Home</Link></li>
              <li><Link to="" className="text-white hover:text-[#03588C] transition-[color] duration-500">Jogos</Link></li>
              <li><Link to="" className="text-white hover:text-[#03588C] transition-[color] duration-500">Consoles</Link></li>
              <li><Link to="" className="text-white hover:text-[#03588C] transition-[color] duration-500">Eventos</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[#F20530] mb-4">Contato</h4>
            <ul className="space-y-2 text-white text-sm">
              <li className="transition-[color] duration-500 hover:text-[#03588C] cursor-default">contato@jogafofo.com</li>
              <li className="transition-[color] duration-500 hover:text-[#03588C] cursor-default">(11) 99999-9999</li>
              <li className="transition-[color] duration-500 hover:text-[#03588C] cursor-default">Sao Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="font-medium text-center mb-6 text-gray-500">
            Siga nossas redes sociais!
          </p>

          <div className="flex justify-center gap-3 mb-6">
            <a href="https://facebook.com" target="blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/50 text-gray-600 hover:bg-[#F20530] hover:text-black transition-all duration-500">
              <FaFacebook className="text-lg" />
            </a>

            <a href="https://instagram.com" target="blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/50 text-gray-600 hover:bg-[#F20530] hover:text-black transition-all duration-500">
              <FaInstagram className="text-lg" />
            </a>

            <a href="https://twitter.com" target="blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/50 text-gray-600 hover:bg-[#F20530] hover:text-black transition-all duration-500">
              <FaXTwitter className="text-lg" />
            </a>

            <a href="https://youtube.com" target="blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/50 text-gray-600 hover:bg-[#F20530] hover:text-black transition-all duration-500">
              <FaYoutube className="text-lg" />
            </a>
          </div>

          <p className="text-xs text-center text-white">
            © 2026 Joga Fofo, Inc. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}