import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export default async function ProductsPage() {
  const products = (await axios.get("http://localhost:8000/products")).data;

  console.log(products);

  return (
    <div>
      {products.map((product: Product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
        </div>
      ))}
    </div>
  );
}
