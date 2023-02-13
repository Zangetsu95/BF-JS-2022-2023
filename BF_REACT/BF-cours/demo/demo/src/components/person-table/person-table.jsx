
const PersonTableHead = () =>(
    //parenthèse return implicite
    <thead>
        <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Age</th>
        </tr>
    </thead>
)

const PersonTableRow =({firstname,lastname,age}) => (
    <tr>
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>{age}</td>
    </tr>
)
    




const PersonTable = ({data}) => {
    //transformation des données en format JSX
    const dataJSX = data.map(person => <PersonTableRow {...person} key={person.id} />);

    return (
        <table>
            <PersonTableHead />
            <tbody>{dataJSX}</tbody>
        </table>
    );
};

PersonTable.defaultProps = {
    data:[]
}


export default PersonTable





