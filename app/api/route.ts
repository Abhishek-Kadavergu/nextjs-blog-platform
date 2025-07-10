import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";


const LoadDb = async () => {
    await ConnectDB()
}

LoadDb()

export async function GET() {
    return NextResponse.json({api_key : "kdfjsdjkf35424jkl2334k2j34lkj"})
}