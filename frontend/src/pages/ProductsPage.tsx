// Importerer komponenter (Sidebar & Topbar)
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function ProductsPage() {
  return (
    <div className="layout">
        <Sidebar />
        <main className="content">
            <Topbar />

            <section className="products-page">
            <h1 className="page-title">Products</h1>

             {/* Filter knapper */}
            <div className="filter-bar">
                <button className="filter-button">Sort</button>
                <button className="filter-button">Category</button>
                <button className="filter-button">Price</button>
            </div>
            
             {/* Produkt tabel */}
             <section className="products-table">
          <div className="table-header">
            <span>Product id</span>
            <span>Category</span>
            <span>Price</span>
            <span>Stock</span>
            <span>Status</span>
            <span>Action</span>
          </div>

          <div className="table-row">
            <span>P-1001</span>
            <span>Electronics</span>
            <span>399,-</span>
            <span>15</span>
            <span>In Stock</span>
            <button className="action-button">→</button>
          </div>

          <div className="table-row">
            <span>P-1002</span>
            <span>Accessories</span>
            <span>249,-</span>
            <span>8</span>
            <span>Low Stock</span>
            <button className="action-button">→</button>
          </div>

          <div className="table-row">
            <span>P-1003</span>
            <span>Furniture</span>
            <span>899,-</span>
            <span>0</span>
            <span>Out of Stock</span>
            <button className="action-button">→</button>
          </div>

          <div className="table-row">
            <span>P-1004</span>
            <span>Warehouse Tools</span>
            <span>599,-</span>
            <span>12</span>
            <span>In Stock</span>
            <button className="action-button">→</button>
           </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default ProductsPage;
