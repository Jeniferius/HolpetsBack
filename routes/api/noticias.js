const request = require('sync-request');
const cheerio = require('cheerio');

let res = request('GET', 'https://elpais.com/tag/mascotas/');

let $ = cheerio.load(res.getBody());

let listTitulo = $('.articulo__interior h2 a');
let listFoto = $('.articulo__interior figure a img');

for (let i = 0; i < listTitulo.length; i++) {
    let titulos = listTitulo[i].children[0].data;
    let enlaces = listTitulo[i].attribs.href;
    let fotos = listFoto[i].attribs.src;
}





