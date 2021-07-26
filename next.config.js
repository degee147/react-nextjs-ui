module.exports = {
    // assetPrefix: ".",
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/subjects' },
            '/subjects': { page: '/subjects' },
        }
    }
}