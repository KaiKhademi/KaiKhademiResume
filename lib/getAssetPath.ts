export const getAssetPath = (path: string): string => {
    const basePath =
        process.env.NODE_ENV === "production"
            ? "/KaiKhademiResume"
            : "";

    return `${basePath}${path}`;
};