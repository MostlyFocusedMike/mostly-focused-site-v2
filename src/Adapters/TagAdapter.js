const filterTags = (tag, tags) => {
    if (tags.findIndex(x => x.slug === tag.slug) === -1) {
        tags.push(tag);
    }
};

const getAllTags = (articles) => {
    const result = [];
    articles.forEach(article => {
        article.tags.forEach(tag => filterTags(tag, result));
    });
    return result;
};

const sortTags = (a, b) => {
    if (a.slug > b.slug) return 1;
    if (a.slug < b.slug) return -1;
    return 0;
};

class TagAdapter {
    static getAll() {
        return fetch(this.url, this.options)
            .then(r => r.json())
            .then(articles => getAllTags(articles).sort(sortTags))
            .then(articles => [
                { name: 'Anything', slug: 'anything' }, // add default
                ...articles,
            ]);
    }
}

TagAdapter.url = './articles.json';
TagAdapter.options = {
    method: 'GET',
    headers: {
        accepts: 'application/json',
    },
};

export default TagAdapter;
