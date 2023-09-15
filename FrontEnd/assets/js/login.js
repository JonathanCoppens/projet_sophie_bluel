const token = process.env.TOKEN; //récupération du token inséré dans la console

const request = new Request(url, {
    headers: {
        Authorization:`Bearer ${token}`,
    },
});