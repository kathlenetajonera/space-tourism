import { headers } from 'next/headers';

export async function getTechnologies() {
    const host = headers().get('host');
    const protocal = process?.env.NODE_ENV === 'development' ? 'http' : 'https';
    const res = await fetch(`${protocal}://${host}/api/technology`);
    const data = await res.json();

    return data;
}
