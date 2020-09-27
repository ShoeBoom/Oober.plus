import firebase from "@utils/client/client";
import "@firebase/firestore"


export function Query(
    origin: string, dest: string,
    startTime: number, endTime: number,
    minSeats: number,
    minRating: number,
    priceRange: { min: number, max: number },
    vechicleType: string[]
) {
    const db = firebase.firestore();
    let req = db.collection("listing")
        .where("origin", "==", origin)
        .where("dest", "==", dest)
        .where("seatsRemaining", ">=", minSeats)
        .where("minRating", ">=", minRating)

}