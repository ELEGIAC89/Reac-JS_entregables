
function ProfileCard (props){

    const { titulo , arroba , img } = props; 

    return (
        <div className="card">
            <div className="card-img">
                <figure className="image is-1by1">
                    <img src={img} alt="logo"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <h3 className="title is-4">titulo: {titulo}</h3>
                    <p className="sutitle is-4">{arroba}</p>
                </div>
            </div>          
        </div>
    )
}

export default ProfileCard;
