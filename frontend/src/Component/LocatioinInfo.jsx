
const LocationInfo = ({info}) => {
    return (
        <div className="location-info">
            <h2>  Information list  </h2>
            <ul>
                <li>ID:<strong>{info.name}</strong> </li>
                <li>TITLE:<strong>{info.phone}</strong> </li>

            </ul>
        </div>
    )
}

export default LocationInfo