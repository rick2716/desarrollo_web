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
                    <p>1 a 16 de más de 100,00 resultados para <span id='phone'>"phone"</span></p>
                    <select name="Ordenar por:">
                        <option value="value1" selected>Destacados</option>
                        <option value="value2">Precio</option>
                        <option value="value3">A - Z</option>
                    </select>
                </div>
            </div>
            <div className='filtro'></div>
            <div className='main'></div>
        </div>
    );
}

export default Amazon;