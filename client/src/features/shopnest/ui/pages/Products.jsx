import {
  Search,
  ShoppingCart,
  Heart,
  SlidersHorizontal,
  Star,
} from "lucide-react";
import { useAuthHook } from "../../hooks/authHook";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    title: "Premium Smart Watch",
    category: "Electronics",
    price: 3299,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    title: "Minimal Backpack",
    category: "Fashion",
    price: 1499,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    title: "Running Shoes",
    category: "Footwear",
    price: 2199,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    title: "Classic Sunglasses",
    category: "Fashion",
    price: 999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    title: "Modern Coffee Mug",
    category: "Home",
    price: 499,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 7,
    title: "Leather Wallet",
    category: "Accessories",
    price: 799,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8,
    title: "Minimal Desk Lamp",
    category: "Home",
    price: 1299,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80",
  },
];

const Products = () => {
  const { navigate } = useAuthHook();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-main)" }}>
      {/* ================= HEADER ================= */}
      <header
        className="border-b"
        style={{
          backgroundColor: "var(--bg-surface)",
          borderColor: "var(--border)",
        }}
      >
        <button
          onClick={() => navigate("/")}
          type="button"
          className="fixed z-[9999] bottom-4 right-2 px-5 py-2.5 rounded-xl text-xs cursor-pointer
             shadow-[0_8px_25px_rgba(6,78,59,0.25)]
             hover:shadow-[0_8px_30px_rgba(6,78,59,0.45)]
             transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: "var(--primary)",
            color: "var(--text-white)",
          }}
        >
          ← Back To Home
        </button>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Top Header */}
          <div className="h-[72px] flex items-center justify-between gap-5">
            {/* Logo */}
            <div className="flex items-center gap-3 shrink-0">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--primary)" }}
              >
                <ShoppingCart
                  size={19}
                  style={{ color: "var(--text-white)" }}
                />
              </div>

              <span
                className="text-xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                ShopNest
              </span>
            </div>

            {/* Search */}
            <div className="hidden md:block w-full max-w-xl">
              <div className="relative">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  style={{ color: "var(--text-muted)" }}
                />

                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full h-11 rounded-xl pl-11 pr-4 outline-none text-sm"
                  style={{
                    backgroundColor: "var(--bg-soft)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>
            </div>

            {/* Cart */}
            <button
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: "var(--bg-soft)",
                color: "var(--primary)",
              }}
            >
              <ShoppingCart size={20} />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2"
                style={{ color: "var(--text-muted)" }}
              />

              <input
                type="text"
                placeholder="Search products..."
                className="w-full h-11 rounded-xl pl-11 pr-4 outline-none text-sm"
                style={{
                  backgroundColor: "var(--bg-soft)",
                  border: "1px solid var(--border)",
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div>
            <p
              className="text-sm font-semibold"
              style={{ color: "var(--primary-light)" }}
            >
              SHOP COLLECTION
            </p>

            <h1
              className="mt-2 text-3xl md:text-4xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Explore Products
            </h1>

            <p
              className="mt-2 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Discover products picked for your everyday needs.
            </p>
          </div>

          {/* Filter */}
          <button
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
            style={{
              backgroundColor: "var(--bg-surface)",
              color: "var(--text-primary)",
              border: "1px solid var(--border)",
            }}
          >
            <SlidersHorizontal size={17} />
            Filters
          </button>
        </div>

        {/* ================= CATEGORIES ================= */}
        <div className="flex gap-3 overflow-x-auto pb-2 mb-10">
          {[
            "All",
            "Electronics",
            "Fashion",
            "Footwear",
            "Home",
            "Accessories",
          ].map((category, index) => (
            <button
              key={category}
              className="px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap"
              style={{
                backgroundColor:
                  index === 0 ? "var(--primary)" : "var(--bg-surface)",

                color:
                  index === 0 ? "var(--text-white)" : "var(--text-secondary)",

                border:
                  index === 0
                    ? "1px solid var(--primary)"
                    : "1px solid var(--border)",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1"
              style={{
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Image */}
              <div
                className="relative h-[250px] overflow-hidden"
                style={{ backgroundColor: "var(--bg-soft)" }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Wishlist */}
                <button
                  className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-white/90 backdrop-blur"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Heart size={17} />
                </button>

                {/* Category */}
                <span
                  className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "rgba(255,255,255,.92)",
                    color: "var(--primary)",
                  }}
                >
                  {product.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="font-semibold text-[16px] line-clamp-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {product.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mt-2">
                  <Star
                    size={15}
                    fill="currentColor"
                    style={{ color: "var(--warning)" }}
                  />

                  <span
                    className="text-xs font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {product.rating}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mt-5">
                  <span
                    className="text-xl font-bold"
                    style={{ color: "var(--primary)" }}
                  >
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>

                  <button
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition"
                    style={{
                      backgroundColor: "var(--primary)",
                      color: "var(--text-white)",
                    }}
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
