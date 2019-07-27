import Articles from './articles';

class ArticleAdapter {
    static getAll() {
        return Promise.resolve(Articles);
    }
}

export default ArticleAdapter;
