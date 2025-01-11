import { stat } from 'node:fs/promises';

export async function exists(fileSystemPath: string): Promise<boolean> {
    const stats = await stat(fileSystemPath).catch((error) => {
        if (error.code === 'ENOENT') {
            return null;
        }

        throw new Error(error);
    });
    return stats !== null;
}