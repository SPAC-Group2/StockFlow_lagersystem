// Importerer komponenter (Sidebar & Topbar)
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function ProductsPage() {
  return (
    <div className="layout">
        <Sidebar />
        <main className="content">
            <Topbar />
            <h1>Products</h1>

             {/* Filter knapper */}
            <div>
                <button>Sort</button>
                <button>Category</button>
                <button>Price</button>
            </div>
             {/* Produkt tabel */}
        <section>
          <div>
            <span>Product id</span>
            <span>Category</span>
            <span>Price</span>
            <span>Stock</span>
            <span>Status</span>
            <span>Action</span>
          </div>

          <div>
            <span>P-1001</span>
            <span>Electronics</span>
            <span>399,-</span>
            <span>15</span>
            <span>In Stock</span>
            <button>→</button>
          </div>

          <div>
            <span>P-1002</span>
            <span>Accessories</span>
            <span>249,-</span>
            <span>8</span>
            <span>Low Stock</span>
            <button>→</button>
          </div>

          <div>
            <span>P-1003</span>
            <span>Furniture</span>
            <span>899,-</span>
            <span>0</span>
            <span>Out of Stock</span>
            <button>→</button>
          </div>

          <div>
            <span>P-1004</span>
            <span>Warehouse Tools</span>
            <span>599,-</span>
            <span>12</span>
            <span>In Stock</span>
            <button>→</button>
          </div>
        </section>
        </main>
    </div>
  );
}

export default ProductsPage;
