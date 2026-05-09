import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { defaultPortfolioData, type PortfolioData } from "@/lib/portfolioData";

const STORAGE_KEY = "sahil_portfolio_data";
const AUTH_KEY = "sahil_admin_authed";
const PASS_KEY = "sahil_admin_pass";
const DEFAULT_PASS = "admin@sahil2026";

interface PortfolioContextType {
  data: PortfolioData;
  setData: (data: PortfolioData) => void;
  resetData: () => void;
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  changePassword: (current: string, next: string) => boolean;
}

const PortfolioContext = createContext<PortfolioContextType | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [data, setDataState] = useState<PortfolioData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return { ...defaultPortfolioData, ...JSON.parse(stored) };
    } catch {}
    return defaultPortfolioData;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem(AUTH_KEY) === "1";
  });

  const getStoredPass = () => localStorage.getItem(PASS_KEY) || DEFAULT_PASS;

  const setData = (next: PortfolioData) => {
    setDataState(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
  };

  const resetData = () => {
    setDataState(defaultPortfolioData);
    localStorage.removeItem(STORAGE_KEY);
  };

  const login = (password: string): boolean => {
    if (password === getStoredPass()) {
      setIsAuthenticated(true);
      localStorage.setItem(AUTH_KEY, "1");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(AUTH_KEY);
  };

  const changePassword = (current: string, next: string): boolean => {
    if (current !== getStoredPass()) return false;
    localStorage.setItem(PASS_KEY, next);
    return true;
  };

  return (
    <PortfolioContext.Provider value={{ data, setData, resetData, isAuthenticated, login, logout, changePassword }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be used inside PortfolioProvider");
  return ctx;
}
