import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";
import {Provider} from "react-redux";
import {store} from "./store.ts";
import {BrowserRouter, Route, Routes} from "react-router";
import Support from "./components/Support.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </BrowserRouter>

      </MantineProvider>
    </Provider>
  </StrictMode>,
)
