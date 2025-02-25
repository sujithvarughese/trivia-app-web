import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";
import {Provider} from "react-redux";
import {store} from "./store.ts";
import {HashRouter, Route, Routes} from "react-router";
import Support from "./components/Support.tsx";
import PrivacyPolicy from "./components/PrivacyPolicy.tsx";
import Contact from "./components/Contact.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </HashRouter>

      </MantineProvider>
    </Provider>
  </StrictMode>,
)
