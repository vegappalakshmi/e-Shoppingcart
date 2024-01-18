export interface ProductData {
    id: number;
    name: string;
    price: number;
    image1: string;
    count?: number;
    removeFromCart?: number;
    checkoutId?: string;
    // Add any other necessary properties for a product
  }

  export interface ShoppingCartPageProps{
    cartItems: CartItem[];
    removeFromCart: (id: string) => void;
  }
  
  export interface CartItem {
    id: string; 
    name: string; 
    price: number ; 
    image1: string;
    count?: number;
    checkoutId?: string;
}