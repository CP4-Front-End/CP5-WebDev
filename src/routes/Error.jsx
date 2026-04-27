import { useNavigate } from "react-router-dom"

function Error() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#7A0006' }}>
      <div className="max-w-md w-full mx-4 p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#F20D2E' }}>
        <div className="text-center">
          <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFFFFF' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21a2 2 0 012 2v12a2 2 0 01-2 2h-9m-4 0h4m-4 0V9m8 12v-4m0 0V9m0 0l-4 4m4-4l4 4" />
          </svg>
          <h1 className="text-9xl font-bold mb-4" style={{ color: '#FFFFFF' }}>404</h1>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#0D5C7D' }}></div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF' }}>Página não encontrada</h2>
          <p className="mb-8 text-lg" style={{ color: '#F5F5F5' }}>
            Os Joga Fofo não encontraram essa página.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 rounded-full font-bold text-lg transition-transform hover:scale-105"
            style={{ 
              backgroundColor: '#0D5C7D',
              color: '#FFFFFF'
            }}
          >
            Voltar para a loja
          </button>
        </div>
      </div>
    </div>
  )
}

export default Error
