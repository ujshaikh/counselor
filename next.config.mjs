import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    sassOptions: {
        includePaths: [path.join(__dirname, 'public/scss')] 
    }
};

export default nextConfig;
