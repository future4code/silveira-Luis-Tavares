// EXERCÍCIO 3

// ------ RESPOSTA 3-A ------

type Post = {
    autor: string,
    texto: string
};

const posts: Array<Post> = [];

posts.push({autor: "Luis", texto: "teste"});
posts.push({autor: "Carlos", texto: "teste2"});

// ------ RESPOSTA 3-B ------

const buscarPostsPorAutor = (posts: Array<Post>, autorInformado: string): Array<Post> => {
        return posts.filter(post => post.autor === autorInformado);
};

console.log(buscarPostsPorAutor(posts, "Luis"));