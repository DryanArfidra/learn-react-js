import { useState } from "react";
import ConditionalIfElse from "./components/conditionalIfElse";
import SwitchStatement from "./components/switchStatement";
import TernaryConditional from "./components/ternaryOperator";
import TaskList from "./components/renderingList";


function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 1200000 },
    { id: 2, name: 'Mouse', price: 25000 },
    { id: 3, name: 'Keyboard', price: 75000 },
    { id: 4, name: 'Monitor', price: 300000 }
  ]);

  const allTasks = [
    { id: 1, title: 'Membaca Al-Qur\'an', isCompleted: true },
    { id: 2, title: 'Mengerjakan soal Fiqih', isCompleted: false },
    { id: 3, title: 'Menghafal surah Al-Ma\'un', isCompleted: false },
  ];

  const emptyTasks = [];
  

  let content;

  if (products === null) {
    content = <p>Data produk tidak tersedia.</p>;
  } else if (products.length === 0) {
    content = <p>Daftar produk kosong.</p>;
  } else {
    content = (
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    );
  }
  

  return (
    <div>
      <h2>Daftar Produk</h2>
      {content}

      <button onClick={() => setProducts(null)}>Set Null</button>
      <button onClick={() => setProducts([])}>Kosongkan Array</button>
      <button onClick={() => setProducts([
        { id: 1, name: 'Laptop', price: 1200000 },
        { id: 2, name: 'Mouse', price: 25000 },
        { id: 3, name: 'Keyboard', price: 75000 },
        { id: 4, name: 'Monitor', price: 30000 }
      ])}>
        Tampilkan Semua Produk
      </button>
      <br />
      {/* tugas evaluasi */}
      <h2>tugas ke-1</h2>
      <h4>true:</h4>
      <ConditionalIfElse isLoggedIn={true}/>
      <h4>false:</h4>
      <ConditionalIfElse isLoggedIn={false}/>
      <h2>tugas ke-2</h2>
      <h4>true:</h4>
      <TernaryConditional isLoggedIn={true} unreadMessages={5}/>
      <h4>false:</h4>
      <TernaryConditional isLoggedIn={false} unreadMessages={0}/>
      <h2>tugas ke-3</h2>
     <SwitchStatement statuses={"loading"}/>
     <SwitchStatement statuses={"success"}/>
     <SwitchStatement statuses={"error"}/>
     <SwitchStatement statuses={"default"}/>
     <h2>tugas ke-4 & 5</h2>
      <TaskList tasks={allTasks} />
      <TaskList tasks={emptyTasks} />
    </div>
  );
}

export default App;
