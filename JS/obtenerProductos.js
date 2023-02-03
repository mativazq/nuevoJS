const obtenerProductos = async() =>{
    try {
        const response = await fetch('./JSON/stock.json');
        const data = await response.json();

        return data;

    } catch (error) {
        console.log('error : ' , error);
    };
    
};

export { obtenerProductos }