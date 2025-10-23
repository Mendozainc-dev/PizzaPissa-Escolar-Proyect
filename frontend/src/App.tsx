import './App.css'

import { bannerpizzas } from './hooks/banner'
import { usePizzaOrder } from './hooks/pizzasform'


import pizza_peperoni from './assets/pizza_peperoni.jpg'
import pizza_hawaiana from './assets/pizza_hawaiana.jpg'
import pizza_mexicana from './assets/pizza_mexicana.png'
import pizza_combinada from './assets/pizza_combinada.png'
import logo from './assets/pizza-pizza-logo.svg'

import Button from "./components/Button"
import Images from "./components/Images"
import Input from "./components/Input"
import Label from "./components/Label"

const Pizzas_card: React.FC<{ src?: string; name: string; onAdd: (name: string) => void }> = ({ src, name, onAdd }) => (
  <div className="pizza-card">
    <Images className='image_card' src={src} alt={`Pizza ${name}`} />
    <Button className='button_add' id={`add_button_${name}`} type="button" text="Agregar" onClick={() => onAdd(name)} />
  </div>
)

function App() {

const bannerImage = bannerpizzas()
const { selectedPizzas, showForm, handleAddPizza } = usePizzaOrder()

  return (
    <div className='app-container'>
      <header className='app-header'>
        <nav className='app-nav container'>
          <div className='logo-container'>
            <Images src={logo} alt="Logo de la empresa pizza" className='logo-image' />
          </div>
          <div>
            <Label text="A que no puedes comer solo una" className='slogan-text' />
          </div>
        </nav>
      </header>
      <section
        className='app-banner'
        style={{backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <Label text="Pizzas Pissas las mejores del pais" className='banner-text' />
      </section>
      <main className='main-content container'>
        {showForm && (
          <section className='form-section'>
            <div className='pizza-description'>
              <Label text="pizzas seleccionadas:" className='pizza-description-text' />
              <ul>
                {selectedPizzas.map((pizza, index) => (
                  <li key={index}>
                    <Label text={pizza} className='pizza-description-text' />
                  </li>))}
              </ul>
            </div>
            <form action="form_client" method="post" className='order-form'>
              <Label text='Formulario de Compra' className='form-title' />
              <Input id="name" name="name" type="text" placeholder="Ingresa tu nombre" className='form-input' />
              <Input id="phone" name="phone" type="tel" placeholder="Ingresa tu número de teléfono" className='form-input' />
              <Input id="address" name="address" type="text" placeholder="Ingresa tu dirección" className='form-input' />
              <Input id="notes" name="notes" type="text" placeholder="¿Deseas agregar una nota al pedido?" className='form-input' />
              <Button id="submit_order" type="submit" text="Enviar Pedido" className='form-submit-button' />
            </form>
          </section>)}
        <article className='pizzas-section'>
          <Pizzas_card src={pizza_peperoni} name="Pepperoni" onAdd={handleAddPizza} />
          <Pizzas_card src={pizza_hawaiana} name="Tropical" onAdd={handleAddPizza} />
          <Pizzas_card src={pizza_mexicana} name="Mexicana" onAdd={handleAddPizza} />
          <Pizzas_card src={pizza_combinada} name="Combinada" onAdd={handleAddPizza} />
        </article>
      </main>
      <section className='pre-footer'>
        <article className='pre-footer-content container'>
          <div>
            <Label text="Direccion" className='pre-footer-title' />
            <Label text="Calle Progreso #12 " className='pre-footer-text' />
            <Label text="Pénjamo, Gto. México" className='pre-footer-text' />
          </div>
          <div>
            <Label text="Contacto" className='pre-footer-title' />
            <Label text="Telefono: +52 469 126 4545" className='pre-footer-text' />
            <Label text="Correo: Miau@gmail.com" className='pre-footer-text' />
          </div>
        </article>
      </section>
      <footer className='app-footer'>
        <div className='container'>
          <Label text='Pagina creada por Salvador Mendoza Muñoz [Github | Mendozainc-dev]' className='footer-text' />
        </div>
      </footer>
    </div>
  )
}

export default App
