import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import { Destination } from './types';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    const jsonDirectory = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(
        jsonDirectory + '/data.json',
        'utf8'
    );

    let data = JSON.parse(fileContents).destinations;

    if (slug) {
        data = data.find(
            (item: Destination) => item.name.toLowerCase() === slug
        );
    }

    return NextResponse.json(data);
}
