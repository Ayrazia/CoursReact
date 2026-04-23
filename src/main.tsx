import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { LuminosityProvider } from "./LuminosityProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <LuminosityProvider>
                <App />
            </LuminosityProvider>
        </BrowserRouter>
    </StrictMode>,
);