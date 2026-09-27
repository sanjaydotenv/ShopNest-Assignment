import React from "react";
import { useLocation } from "react-router";
import { useAuthHook } from "../../hooks/authHook";

const navItems = [
  { label: "Home", icon: "⌂", path: "/" },
  { label: "Products", icon: "▦", path: "/Products" },
  { label: "Add Product", icon: "+", path: "/addProduct" },
  { label: "Profile", icon: "♙", path: "/profile" },
  { label: "Logout", icon: "↪", },
];

const AsideNavigate = () => {
  const { navigate } = useAuthHook();
  const location = useLocation();

  return (
    <div>
      <nav className="space-y-1.5">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                navigate(item.path);
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: isActive
                  ? "var(--primary-light)"
                  : "transparent",

                color: isActive ? "var(--text-white)" : "rgba(255,255,255,.72)",

                boxShadow: isActive ? "var(--shadow-sm)" : "none",
              }}
            >
              <span className="text-base w-5 text-center">{item.icon}</span>

              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default AsideNavigate;
