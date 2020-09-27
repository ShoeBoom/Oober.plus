import firebase from "@utils/client/client";
import "@firebase/firestore"


export function Query(
    origin: string, dest: string,
    startTime: number, endTime: number,
    minSeats: number,
    priceRange: { min: number, max: number },
    vechicleType: string[]
) {
    const db = firebase.firestore();
    return db.collection("listing")
        .where("origin", "==", origin)
        .where("dest", "==", dest)
        .where("seatsRemaining", ">=", minSeats)
        .where("depTime", ">=", startTime)
        .where("depTime", "<=", endTime)
        .where("price", ">=", priceRange.min)
        .where("price", "<=", priceRange.max)
        .where("type", "in", vechicleType)
}