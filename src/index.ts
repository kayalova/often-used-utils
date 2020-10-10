export const getEnvKey = (value: string, defaultValue?: string): string | null => {
    return process.env[value] || defaultValue || null
}
