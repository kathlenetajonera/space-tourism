import { headers } from 'next/headers';

export async function getCrewMembers() {
    const host = headers().get('host');
    const protocal = process?.env.NODE_ENV === 'development' ? 'http' : 'https';
    const res = await fetch(`${protocal}://${host}/api/crew`);
    const data = await res.json();

    return data;
}
