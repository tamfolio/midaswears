// Product data structure for TypeScript (optional but good practice)
export interface Product {
    id: number;
    brand: string;
    name: string;
    price: number;
    label?: string; // Optional - can be 'New', 'Exclusive', 'Sale', etc.
    imageA: string; // Default/hover-out image
    imageB: string; // Hover image
    category?: string; // Optional - 'men', 'women', 'archive'
    inStock?: boolean; // Optional - inventory status
    slug?: string; // Optional - for URL generation
  }
  
  // Example usage in JavaScript (you can ignore the interface above if not using TypeScript)
  export const productCategories = {
    MEN: 'men',
    WOMEN: 'women', 
    ARCHIVE: 'archive',
    ACCESSORIES: 'accessories'
  };
  
  export const productLabels = {
    NEW: 'New',
    EXCLUSIVE: 'Exclusive', 
    SALE: 'Sale',
    ARCHIVE: 'Archive',
    LIMITED: 'Limited Edition'
  };