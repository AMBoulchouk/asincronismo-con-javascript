const fetchData = require("../utils/fetchData");

const API = "https://rickandmortyapi.com/api/character/";


const anotherFunction = async (url_api, iterator) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[iterator].id}`);
        const origin = await fetchData(character.origin.url);

        //console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
}

for (let iterator = 0; iterator < 5; iterator++) {
    anotherFunction(API, iterator);
}