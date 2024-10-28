import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const cartAtom = atomWithStorage('cart', []);