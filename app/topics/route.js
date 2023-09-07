import { NextResponse} from "Next/server";

const fooSet = new Set();

fooSet.add("cars");
fooSet.add("bikes");

export async function GET(request) {
    let searchTopic = request.nextUrl.searchParams.get("topic");

const doesTopicExist = fooSet.has(searchTopic);

let message = "";

if (doesTopicExist) {
    message = `Topic ${searchTopic} exists`;
} else {
    message = `No Dice. ${searchTopic} Topic does not exist`;
}

  return NextResponse.json({ message });
}


export async function POST (request) {

    const topics = new Set(); 
    let res = await request.json();
    console.log("request >>>", res.topic);
    topics.add(res.topic);
    console.log("topics >>>", topics);
    return NextResponse.json( {message: "Something Happened"});
}