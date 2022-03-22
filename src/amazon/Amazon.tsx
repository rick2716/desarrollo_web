import './Amazon.css';

function Amazon() {
    return(
        <div className='container'>
            <div className='header'>
                <div className='containerBuscador'>
                    <div className='logo'></div>
                    <div className='ubicacion'></div>
                    <div className='buscador'></div>
                    <div className='bandera'></div>
                    <div className='listas'></div>
                    <div className='pedidos'></div>
                    <div className='carrito'></div>
                </div>
                <div className='opciones'></div>
                <div className='resultados'>
                    <p>1 a 16 de más de 100,00 resultados para <span>"phone"</span></p>
                    <button>ordenar por: destacados</button>
                </div>
            </div>
            <div className='filtro'></div>
            <div className='main'></div>
        </div>
    );
}

export default Amazon;