//this is the image imports
import pizza_peperoni from './assets/pizza_peperoni.jpg'
import pizza_hawaiana from './assets/pizza_hawaiana.jpg'
import pizza_mexicana from './assets/pizza_mexicana.png'
import pizza_combinada from './assets/pizza_combinada.png'

//Import Logo
import logo from './assets/pizza-pizza-logo.svg'

//Components at App
import Button from "./components/Button"
import Images from "./components/Images"
import Input from "./components/Input"
import Label from "./components/Label"


//This const is for the pizza cards
const Pizzas_card: React.FC<{ src?: string }> = ({ src }) => (
  <div>
    <Images src={src} alt="pizzas de diferentes sabores"/>
    <Button id="add_button" type="button" text="Agregar"/>
  </div>
);

//Main App function
function App() {
  return (
    <div>
      <header>
        <nav>
          <div >
            <Images src={logo} alt="Logo de la empresa pizza"/>
          </div>
          <div>
            <Label text="A que no puedes comer solo una"/>
          </div>
        </nav>
      </header>
      <section> 
        <Label text="Pizzas pissas las mejores del pais"/>
      </section>
      <main>
        <section>
          <form action="form_client" method="post">
            <Label text='Formulario de Compra'/>
            <Input id="" name="" type="text" placeholder="Ingresa tu nombre"/>
            <Input id="" name="" type="tel" placeholder="Ingresa tu numero de telefono"/>
            <Input id="" name="" type="text" placeholder="Ingresa tu direccion"/>
            <Input id="" name="" type="text" placeholder="Deseas Agregar una nota al pedido"/>
          </form>
        </section>
        <article>
          <Pizzas_card src={pizza_peperoni}/>
          <Pizzas_card src={pizza_hawaiana}/>
          <Pizzas_card src={pizza_mexicana}/>
          <Pizzas_card src={pizza_combinada}/>
        </article>
        <section>
          <article>
            <Label text="calle progreso"/>
            <Label text="+52 4691264545"/>
            <Label text="Correo: Gatito@gmail.com"/>
            <Label text="Siguenos en nuestras redes sociales por favor"/>
          </article>
        </section>
      </main>
      <footer>
        <div>
          <Label text='Pagina creada por Salvador Mendoza Muñoz [Github | Mendozainc-dev]'/>
        </div>
      </footer>
    </div>
  )
}

export default App