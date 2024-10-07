// import { atom } from 'jotai';

// const getInitialCart = () => {
//   if (typeof window !== 'undefined') {
//     const savedCart = localStorage.getItem('cart');
//     return savedCart ? JSON.parse(savedCart) : [];
//   }
//   return [];
// };

// export const cartAtom = atom(getInitialCart());

// cartAtom.onMount = (setCart) => {
//   const updateCart = () => {
//     const cart = getInitialCart();
//     setCart(cart);
//   };

//   window.addEventListener('storage', updateCart);
//   return () => window.removeEventListener('storage', updateCart);
// };

// export const cartAtomWithStorage = atom(
//   (get) => get(cartAtom),
//   (get, set, update) => {
//     set(cartAtom, update);
//     localStorage.setItem('cart', JSON.stringify(update));
//   }
// );


import { atom } from 'jotai';

const getInitialCart = () => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};

export const cartAtom = atom(getInitialCart());

cartAtom.onMount = (setCart) => {
  const updateCart = () => {
    const cart = getInitialCart();
    setCart(cart);
  };

  window.addEventListener('storage', updateCart);
  return () => window.removeEventListener('storage', updateCart);
};

export const cartAtomWithStorage = atom(
  (get) => get(cartAtom),
  (get, set, update) => {
    set(cartAtom, update);
    localStorage.setItem('cart', JSON.stringify(update));
  }
);