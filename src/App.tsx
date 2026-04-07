import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Crew from "./pages/Crew"; 
import Events from "./pages/Events";
import Info from "./pages/Info";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import SEO from "./components/SEO";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
        <HelmetProvider>
          <ErrorBoundary>
            <Toaster />
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/crew" element={<Crew />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/info" element={<Info />} />
                  <Route path="/gallery" element={<Gallery />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </ErrorBoundary>
        </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

