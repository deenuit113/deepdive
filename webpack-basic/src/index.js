import getRandomAddress from "./randomAddress";
import { nanoid } from "nanoid";
import './styles/main.scss';
import mainImage from './assets/image.jpeg';

const img = document.getElementById('img');
img.src = mainImage;

console.log(nanoid());
console.log(nanoid());
console.log(nanoid());
console.log(nanoid());
console.log(getRandomAddress());