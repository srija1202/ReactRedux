// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import { setProducts } from './redux/cartSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.pinimg.com/564x/da/c5/9f/dac59f48a77524ada600c068c0d273de.jpg",
    quantity: 1
},
{
    id: 2,
    title: "iPhone X",
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://www.apple.com/newsroom/images/product/iphone/standard/iPhone_X_front_face_inline.jpg.large.jpg",
    quantity: 1
},
{
    id: 3,
    title: "Samsung Universe 9",
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://admin.hyperce.io/assets/thumbnail__12__preview.jpg?w=800",
    quantity: 1
},
{
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: "https://5.imimg.com/data5/SELLER/Default/2023/6/316894377/HW/EM/ZV/157629195/oppo-f19-pro-plus-5g-8-128gb-.jpg",
    quantity: 1
},
{
    id: 5,
    title: "Huawei P30",
    description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail: "https://5.imimg.com/data5/ZR/TV/HW/SELLER-57126529/huawei-p30-pro-6-gb-ram-plus-128-gb-rom-pearl-white-mobile-500x500.jpg",
    quantity: 1
}
];

store.dispatch(setProducts(products));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
