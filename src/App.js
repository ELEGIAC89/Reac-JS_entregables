import "./App.css";
import ProfileCard from "./Components/ProfileCard/ProfileCard.js";
import MantelImg from "./img-cards/mantel-tokio.jpg";
import AlfombraImg from "./img-cards/alfombra mediana.jpg";
import AlmohadonImg from "./img-cards/almohadon-paraiso.jpg";
import CubresillonImg from "./img-cards/cubresillon.jpg";
import NavBar from "./Components/NavBar/NavBar.js";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.js";
import CartWidget from "./Components/CartWidget/CartWidget.js";
import 'bootstrap/dist/css/bootstrap.css';
import "bulma/css/bulma.css";



function App (){
    return (
    <div>   
        <section className="hero is-primary">
            <div className="hero body">
                <h1 className="title">Saona Deco Home</h1>
            </div>
        </section>
        <section>
            <div>
                <NavBar/>
                <CartWidget />
                <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!"/>
            </div>
        </section>
        <div className="columns">
            <div className="column is-3">
                <ProfileCard titulo="Mantel" arroba="@Tokio" img={MantelImg}/>
            </div>
            <div className="column is-3">
                 <ProfileCard titulo="Alfombra" arroba="@Chicago"img={AlfombraImg}/>
            </div>
            <div className="column is-3">
                <ProfileCard titulo="Almohadon" arroba="@Paraiso"img={AlmohadonImg}/>
             </div>
            <div className="column is-3"> 
                <ProfileCard titulo="Cubresillon" arroba="@Amsterdam"img={CubresillonImg}/>
            </div>
        </div>
    </div>
    )
}





export default App; 