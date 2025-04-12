
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/modules/housing" element={<Index />} />
          <Route path="/modules/energy" element={<Index />} />
          <Route path="/modules/food" element={<Index />} />
          <Route path="/modules/education" element={<Index />} />
          <Route path="/modules/economy" element={<Index />} />
          <Route path="/modules/impact" element={<Index />} />
          <Route path="/get-involved" element={<Index />} />
          <Route path="/about" element={<Index />} />
          <Route path="/community" element={<Index />} />
          <Route path="/map" element={<Index />} />
          <Route path="/volunteer" element={<Index />} />
          <Route path="/partner" element={<Index />} />
          <Route path="/invest" element={<Index />} />
          <Route path="/share" element={<Index />} />
          <Route path="/contact" element={<Index />} />
          <Route path="/events" element={<Index />} />
          <Route path="/privacy-policy" element={<Index />} />
          <Route path="/terms-of-use" element={<Index />} />
          <Route path="/sitemap" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
