"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Music, LogOut, Home, Info, Shield, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in by verifying access token existence
    const accessToken = localStorage.getItem("spotify_access_token");
    setIsLoggedIn(!!accessToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("spotify_access_token");
    localStorage.removeItem("spotify_refresh_token");
    localStorage.removeItem("token_expiration");
    setIsLoggedIn(false);
    router.push("/");
    window.location.reload();
  };

  const menuItems = [
    {
      label: "Home",
      href: "/",
      icon: <Home className="h-4 w-4" />,
    },
    {
      label: "About",
      href: "/about",
      icon: <Info className="h-4 w-4" />,
    },
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
      icon: <Shield className="h-4 w-4" />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <Mail className="h-4 w-4" />,
    },
    // Only include logout if user is logged in
    ...(isLoggedIn
      ? [
          {
            label: "Logout",
            onClick: handleLogout,
            icon: <LogOut className="h-4 w-4" />,
            href: "#",
          },
        ]
      : []),
  ];

  return (
    <header className="w-full bg-zinc-900 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-green-500" />
            <span className="text-green-500 font-bold text-xl">
              Receiptify+
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.label}>
                {item.onClick ? (
                  <a
                    href={item.href}
                    onClick={item.onClick}
                    className="text-gray-300 hover:text-green-500 transition-colors duration-200 text-sm font-medium flex items-center gap-2"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-green-500 transition-colors duration-200 text-sm font-medium flex items-center gap-2"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-green-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <React.Fragment key={item.label}>
                  {item.onClick ? (
                    <a
                      href={item.href}
                      onClick={item.onClick}
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-green-500 hover:bg-zinc-800 transition-colors duration-200"
                    >
                      {item.icon}
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-green-500 hover:bg-zinc-800 transition-colors duration-200"
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
