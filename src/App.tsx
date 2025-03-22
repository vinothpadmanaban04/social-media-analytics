
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InstagramAnalytics from "./pages/InstagramAnalytics";
import YouTubeAnalytics from "./pages/YouTubeAnalytics";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#3b82f6', // blue
    },
    secondary: {
      main: '#ec4899', // pink for Instagram
    },
    error: {
      main: '#ef4444', // red for YouTube
    },
    background: {
      default: '#f9fafb',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/instagram-analytics" element={<InstagramAnalytics />} />
            <Route path="/youtube-analytics" element={<YouTubeAnalytics />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
