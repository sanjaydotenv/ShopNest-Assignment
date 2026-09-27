import AsideNavigate from "../components/AsideNavigate";

const AddProduct = () => {
  return (
    <div
      className="min-h-screen flex"
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-primary)",
      }}
    >
      {/* ================= SIDEBAR ================= */}
      <aside
        className="fixed left-0 top-0 h-screen w-[220px] px-4 py-5 flex flex-col"
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

      {/* ================= MAIN ================= */}
      <main className="ml-[220px] flex-1 p-7">
        {/* ================= HEADER ================= */}
        <div className="mb-7">
          <h1 className="text-2xl font-bold tracking-tight">Add New Product</h1>

          <p
            className="text-sm mt-1"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Fill in the details to add a new product
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-[1fr_330px] gap-6 max-w-[1050px]">
          {/* ================= FORM ================= */}
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
                  placeholder="Enter product name"
                  className="w-full h-10 px-3 rounded-lg outline-none text-sm transition-all"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              {/* Description */}

              {/* Price + Stock */}
              <div className="grid grid-cols-2 gap-4">
                {/* Price */}
                <div className=" w-[40vw]">
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
                    placeholder="Enter price"
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

              {/* Images */}
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

                <div
                  className="h-[150px] rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    border: "1.5px dashed var(--border-dark)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-2"
                    style={{
                      backgroundColor: "var(--bg-soft)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    ▧
                  </div>

                  <p className="text-sm font-medium">Click to upload images</p>

                  <p
                    className="text-xs mt-1"
                    style={{
                      color: "var(--text-muted)",
                    }}
                  >
                    or drag and drop
                  </p>
                </div>
              </div>
            </form>
          </div>

          {/* ================= PRODUCT PREVIEW ================= */}
          <div
            className="rounded-xl p-4 h-fit sticky top-7"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            {/* Preview Title */}
            <h2 className="text-sm font-semibold mb-3">Product Preview</h2>

            {/* Preview Image */}
            <div
              className="w-full h-[180px] rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: "var(--bg-soft)",
              }}
            >
              <div
                className="text-4xl"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                ▧
              </div>
            </div>

            {/* Preview Details */}
            <div className="mt-4">
              <p
                className="text-sm font-semibold"
                style={{
                  color: "var(--text-primary)",
                }}
              >
                Product name
              </p>

              <p
                className="text-sm font-bold mt-1"
                style={{
                  color: "var(--text-primary)",
                }}
              >
                ₹0
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

        {/* ================= ACTION BUTTONS ================= */}
        <div className="max-w-[1050px] flex mt-10 gap-3">
          <button
            type="button"
            className="h-10 px-5 rounded-lg text-sm font-medium transition-all hover:opacity-80"
            style={{
              backgroundColor: "var(--bg-surface)",
              color: "var(--text-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            Cancel
          </button>

          <button
            type="button"
            className="h-10 px-6 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
            style={{
              backgroundColor: "var(--btn-primary)",
              color: "var(--text-white)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            Add Product
          </button>
        </div>
      </main>
    </div>
  );
};

export default AddProduct;
