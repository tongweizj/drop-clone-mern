import { AuthProvider } from '@/context/AuthContext.jsx';
import { CartProvider } from '@/context/CartContext';
import { FavoritesProvider } from '@/context/FavoritesContext';
import { HelmetProvider } from "react-helmet-async";
const AppProviders = ({ children }) => (
  <HelmetProvider>
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          {children}
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  </HelmetProvider>
);
export default AppProviders;