import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import { Technology } from './types';

export async function GET() {
    const jsonDirectory = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(
        jsonDirectory + '/data.json',
        'utf8'
    );

    let data: Technology[] = JSON.parse(fileContents).technology;

    return NextResponse.json(data);
}
