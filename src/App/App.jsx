import Tariff from '../Components/Tariff/Tariff';
import './App.scss';


const tariffs = [
  {
    name: "Безлилитный 300",
    price: 300,
    speed: 10,
    text: "Объем включенного трафика не ограничен",
    classData: "blue"
  },
  {
    name: "Безлилитный 450",
    price: 450,
    speed: 50,
    text: "Объем включенного трафика не ограничен",
    classData: "green"
  },
  {
    name: "Безлилитный 550",
    price: 550,
    speed: 100,
    text: "Объем включенного трафика не ограничен",
    classData: "red"
  },
  {
    name: "Безлилитный 1000",
    price: 1000,
    speed: 200,
    text: "Объем включенного трафика не ограничен",
    classData: "black"
  },
]

function App() {

  return (
    <>
      <div>
        {tariffs.map((item) =>
          <Tariff {...item} />
        )}
      </div>
    </>
  )
}

export default App
