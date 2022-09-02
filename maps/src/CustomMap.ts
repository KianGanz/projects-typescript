/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        const mapElement: HTMLElement | null = document.getElementById(divId);
     
        if (mapElement) {
            new google.maps.Map(mapElement, {
                zoom: 1,
                center: {
                    lat: 0, 
                    lng: 0
                },
            });
        }
    }

    addUserMarker(user: User): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: user.location.lat,
                lng: user.location.lng
            }
        });
    }

    addCompanyMarker(company: Company): void {

    }
}