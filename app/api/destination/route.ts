import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function GET() {
    const jsonDirectory = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(
        jsonDirectory + '/data.json',
        'utf8'
    );

    let data = JSON.parse(fileContents).destinations;

    return NextResponse.json(data);
}
