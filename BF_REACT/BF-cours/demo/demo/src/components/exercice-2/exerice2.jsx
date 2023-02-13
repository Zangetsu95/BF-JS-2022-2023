const ProductHead = () =>(
    <thead>
        <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>En promo</th>
        </tr>
    </thead>
)

const ProductTableRow =({name,price,promo}) =>(
    <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{promo ? 'Oui' : 'Non'}</td>
    </tr>
)



const ProductTable = ({data}) => {
    const dataJSX = data.map(product => <ProductTableRow {...product} key={personalbar.id}/>)

    return(
        <table>
            <ProductHead/>
            <tbody>{dataJSX}</tbody>
        </table>
    )
};

ProductTable.defaultProps = {
    data:[]
}

export default ProductTable



