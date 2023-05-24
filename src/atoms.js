import { atom } from "recoil";


export const filter_field = atom({
    key: 'filterField',
    default: '',
});
export const filter_value = atom({
    key: 'filterValue',
    default: '',
});