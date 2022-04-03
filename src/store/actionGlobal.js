export const checkConnection = connection => {
    return {
        type: 'CHECK_CONNECTION',
        connection,
    }
}