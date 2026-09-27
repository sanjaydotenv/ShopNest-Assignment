import React from "react";
import { useNavigate } from "react-router";
import AsideNavigate from "../components/AsideNavigate";

const product = {
  title: "Nike Air Max",

  price: 4999,
  images: [
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300",
  ],
};


const EditProduct = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex"
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-primary)",
      }}
    >
      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside
        className="fixed left-0 top-0 z-50 h-screen w-[220px] px-4 py-5 flex flex-col"
        style={{
          backgroundColor: "var(--bg-dark)",
          color: "var(--text-white)",
        }}
      >
        {/* Logo */}

        <div className="px-2 mb-8 flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--primary)",
            }}
          >
            S
          </div>

          <span className="font-bold tracking-tight text-base">ShopNest</span>
        </div>

        {/* Navigation */}

        
        <AsideNavigate />
        {/* User */}

        <div
          className="mt-auto pt-5 border-t flex items-center gap-3"
          style={{
            borderColor: "rgba(255,255,255,.1)",
          }}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm"
            style={{
              backgroundColor: "var(--bg-surface)",
              color: "var(--primary)",
            }}
          >
            👤
          </div>

          <div className="min-w-0">
            <p className="text-xs font-semibold truncate">Mayur Bairagi</p>

            <p className="text-[10px] text-white/45 truncate">Admin</p>
          </div>
        </div>
      </aside>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="ml-[220px] flex-1 p-7">
        {/* Header */}

        <div className="mb-7">
          <h1 className="text-2xl font-bold tracking-tight">Edit Product</h1>

          <p
            className="text-sm mt-1"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Update product details
          </p>
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="grid grid-cols-[1fr_330px] gap-6 max-w-[1050px]">
          {/* =================================================
              FORM
          ================================================= */}

          <div
            className="rounded-xl p-5"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <form className="space-y-5">
              {/* Product Name */}

              <div>
                <label className="block text-sm font-medium mb-2">
                  Product Name
                  <span
                    className="ml-1"
                    style={{
                      color: "var(--danger)",
                    }}
                  >
                    *
                  </span>
                </label>

                <input
                  type="text"
                  defaultValue={product.title}
                  placeholder="Enter product name"
                  className="w-full h-10 px-3 rounded-lg outline-none text-sm"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              {/* Description */}

              {/* Price + Stock */}

              <div className="grid w-[50vw] grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Price
                    <span
                      className="ml-1"
                      style={{
                        color: "var(--danger)",
                      }}
                    >
                      *
                    </span>
                  </label>

                  <input
                    type="number"
                    defaultValue={product.price}
                    className="w-full h-10 px-3 rounded-lg outline-none text-sm"
                    style={{
                      backgroundColor: "var(--bg-surface)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                {/* Stock */}
              </div>

              {/* Category */}

              {/* =================================================
                  IMAGES
              ================================================== */}

              <div>
                <label className="block text-sm font-medium mb-2">
                  Images
                  <span
                    className="ml-1"
                    style={{
                      color: "var(--danger)",
                    }}
                  >
                    *
                  </span>
                </label>

                <div className="flex items-center gap-3">
                  {/* Existing Images */}

                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-[72px] h-[72px] rounded-lg overflow-hidden"
                      style={{
                        backgroundColor: "var(--bg-soft)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <img
                        src={image}
                        alt={`Product ${index + 1}`}
                        className="w-full h-full object-contain"
                      />

                      {/* Remove */}

                      <button
                        type="button"
                        className="absolute top-1 right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] cursor-pointer"
                        style={{
                          backgroundColor: "var(--danger)",
                          color: "var(--text-white)",
                        }}
                      >
                        ×
                      </button>
                    </div>
                  ))}

                  {/* Add More */}

                  <button
                    type="button"
                    className="w-[72px] h-[72px] rounded-lg flex items-center justify-center text-2xl cursor-pointer transition-all"
                    style={{
                      backgroundColor: "var(--bg-soft)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    +
                  </button>
                </div>

                <p
                  className="text-xs mt-2"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  Add or remove product images
                </p>
              </div>
            </form>
          </div>

          {/* =================================================
              PRODUCT PREVIEW
          ================================================== */}

          <div
            className="rounded-xl p-4 h-fit sticky top-7"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <h2 className="text-sm font-semibold mb-3">Product Preview</h2>

            {/* Main Image */}

            <div
              className="w-full h-[180px] rounded-lg overflow-hidden flex items-center justify-center"
              style={{
                backgroundColor: "var(--bg-soft)",
              }}
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product Details */}

            <div className="mt-4">
              <p className="text-sm font-semibold">{product.title}</p>

              <p
                className="text-sm font-bold mt-1"
                style={{
                  color: "var(--text-primary)",
                }}
              >
                ₹ {product.price.toLocaleString("en-IN")}
              </p>

              <div className="flex items-center gap-1.5 mt-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: "var(--success)",
                  }}
                />

                <span
                  className="text-xs"
                  style={{
                    color: "var(--success)",
                  }}
                >
                  In Stock
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            ACTION BUTTONS
        ====================================================== */}

        <div className="max-w-[1050px] flex justify-end gap-3 mt-5">
          {/* Cancel */}

          <button
            type="button"
            onClick={() => navigate("/Products")}
            className="h-10 px-5 rounded-lg text-sm font-medium cursor-pointer transition-all hover:opacity-80"
            style={{
              backgroundColor: "var(--bg-surface)",
              color: "var(--text-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            Cancel
          </button>

          {/* Update */}

          <button
            type="button"
            className="h-10 px-6 rounded-lg text-sm font-semibold cursor-pointer transition-all hover:opacity-90"
            style={{
              backgroundColor: "var(--btn-primary)",
              color: "var(--text-white)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            Update Product
          </button>
        </div>
      </main>
    </div>
  );
};

export default EditProduct;
