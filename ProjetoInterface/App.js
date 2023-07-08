import logo from './logo.svg';
import './App.css';

function App() {
return (
  <div>
    <nav id="navbar" className="bg-gray-800 py-4">
      <ul className="flex justify-between">
        <li><a href="#welcome-section" clas
sName="text-white hover:text-gray-300">Bem-Vindo!</a></li>
        <li><a href="#projects" className="text-white hover:text-gray-300">Projetos</a></li>
        <li><a href="#" id="profile-link" target="_blank" className="text-white hover:text-gray-300">Meu Perfil</a></li>
      </ul>
    </nav>

    <section id="welcome-section" className="py-16">
      <h1 className="text-4xl font-bold text-center">Bem-Vindo ao meu portifólio!</h1>
    </section>

    <section id="projects" className="py-16">
      <div className="flex justify-center">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Projeto 1</h2>
          <p className="mb-4">Descrição do projeto...</p>
          <a href="" target="_blank" className="text-blue-500">Ver projeto</a>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Projeto 2</h2>
          <p className="mb-4">Descrição do projeto...</p>
          <a href="" target="_blank" className="text-blue-500">Ver projeto</a>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Projeto 3</h2>
          <p className="mb-4">Descrição do projeto...</p>
          <a href="" target="_blank" className="text-blue-500">Ver projeto</a>
        </div>
      </div>
    </section>
  </div>
);
}
