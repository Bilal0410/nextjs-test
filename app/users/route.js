import { NextResponse} from "Next/server";

const usersMap = new Map();

usersMap.set("12", {
    id: 12,
    firstName: "John",
    lastName:"Doe",
});

console.log("userMaps size, 1st time >>>", usersMap.size);

usersMap.set("30", {
    id: 30,
    firstName: "Karin",
    lastName:"Nordman",
});

console.log("userMaps size, 2st time >>>", usersMap.size);

usersMap.delete ("12");

console.warn ("userMaps size, After delete >>>", usersMap.size); 

usersMap.forEach((x) => console.warn(x));

export async function GET(request) {
    const {id} = request.query;
    console.warn("id>>>", id);
    const selectedUser = usersMan.get(id);
};
