/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';

const user = new User();

console.log(user);

const company = new Company();
console.log(company);

const mapElement: HTMLElement | null = document.getElementById("map");
     
if (mapElement) {
  new google.maps.Map(mapElement, {
    zoom: 1,
    center: {
        lat: 0, 
        lng: 0
    },
  });
}
 