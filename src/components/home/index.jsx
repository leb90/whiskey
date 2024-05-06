import React from 'react';

function Home() {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">Nombre de Tu Marca</h1>
          <div>
            <a href="#" className="px-4">Inicio</a>
            <a href="#" className="px-4">Productos</a>
            <a href="#" className="px-4">Sobre Nosotros</a>
          </div>
        </div>
      </nav>

      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20230707/pngtree-3d-render-of-abstract-bokeh-background-with-gold-whiskey-glass-image_3814639.jpg')" }}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold">El Espíritu de la Destilación</h2>
            <p className="text-xl mt-4">Explora nuestra colección exclusiva de whiskies.</p>
          </div>
        </div>
      </header>

      <section className="container mx-auto my-12">
        <h3 className="text-3xl font-bold text-center mb-8">Nuestros Productos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://i0.wp.com/ensedeciencia.com/wp-content/uploads/2023/12/EdeCiencia-2P-40-5.jpg?resize=800%2C451&ssl=1" alt="Producto 1" className="w-full h-64 object-cover"/>
            <div className="p-6">
              <h4 className="font-bold text-lg">Producto 1</h4>
              <p className="text-gray-600 mt-2">Breve descripción del producto.</p>
            </div>
          </div>
          {/* Repite el bloque para otros productos */}
        </div>
      </section>

      <section className="my-12 p-6 bg-gray-100">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-6">Sobre Nosotros</h3>
          <p className="text-center text-gray-800 max-w-2xl mx-auto">
            Descubre más sobre nuestra pasión y el arte detrás de cada botella.
          </p>
        </div>
      </section>
      
      <footer className="bg-gray-800 text-white text-center p-4">
        © 2024 Nombre de Tu Marca. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default Home;
