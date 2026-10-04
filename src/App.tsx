import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import ServiceDetail from "./pages/ServiceDetail";
import InsightDetail from "./pages/InsightDetail";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/team" element={<Team />} />
          {/* Products hidden for now — routes redirect home */}
          <Route path="/products/*" element={<Navigate to="/" replace />} />
          <Route path="/talos" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
