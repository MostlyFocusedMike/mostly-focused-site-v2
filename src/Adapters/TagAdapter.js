const filterTags = (tag, tags) => {
    if (tags.findIndex(x => x.slug === tag.slug) === -1) {
        tags.push(tag);
    }
};

const sortTags = (a, b) => {
    if (a.slug > b.slug) return 1;
    if (a.slug < b.slug) return -1;
    return 0;
};

const getAllTags = (articles) => {
    const result = [];
    articles.forEach(article => {
        article.tags.forEach(tag => filterTags(tag, result));
    });
    return result;
};

class TagAdapter {
    static getAll() {
        return fetch(this.url, this.options)
            .then(r => r.json())
            .then(articles => getAllTags(articles).sort(sortTags));
    }
}

TagAdapter.url = './articles.json';
TagAdapter.options = {
    method: 'GET',
    credentials: 'include', // fetch doesn't include cookies by default
    headers: {
        accepts: 'application/json',
    },
};

export default TagAdapter;
