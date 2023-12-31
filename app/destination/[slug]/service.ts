import { headers } from 'next/headers';

export async function getDestinations() {
    const host = headers().get('host');
    const protocal = process?.env.NODE_ENV === 'development' ? 'http' : 'https';
    const res = await fetch(`${protocal}://${host}/api/destination`);
    const data = await res.json();

    return data;
}
