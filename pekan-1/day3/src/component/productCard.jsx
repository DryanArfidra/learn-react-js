function ProductCard({productName, price, stock, isAvailable}) {
   
    return (
         <div>
        <h1 style={{padding: '20px', margin: '10px', background: 'gray', color: 'blue'}}>{productName}</h1>
        <h2 style={{textAlign: 'center'}}>Rp {price}</h2>
        <h2 style={{textAlign: 'center'}}>stock {stock}</h2>
        <h3 style={{textAlign: 'center'}}>{isAvailable ? 'tersedia' : 'tidak tersedia'}</h3>
       
    </div>
    )
   

    }


export default ProductCard;