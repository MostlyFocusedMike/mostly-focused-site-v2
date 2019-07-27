/* eslint-disable object-curly-newline */
import articlesRaw from './articles';

const checkForImage = imageId => (
    imageId
        ? `https://miro.medium.com/max/1400/${imageId}`
        : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Pictogram_voting_question.svg/440px-Pictogram_voting_question.svg.png'
);

const formatTags = (tags) => {
    return tags.map(({ name, slug, postCount, metadata: { coverImage } }) => {
        return { name, slug, postCount, image: checkForImage(coverImage.id) };
    });
};

const formatArticle = (post) => {
    const {
        id,
        title,
        slug,
        uniqueSlug,
        virtuals: { previewImage: { imageId }, tags },
        content: { subtitle, metaDescription },
    } = post;

    return {
        id,
        title,
        slug,
        uniqueSlug,
        image: checkForImage(imageId),
        subtitle,
        metaDescription,
        tags: formatTags(tags),
    };
};

class ArticleAdapter {
    static getAll() {
        const posts = articlesRaw.payload.references.Post;
        const articles = [];
        Object.keys(posts).forEach((post) => {
            articles.push(formatArticle(posts[post]));
        });

        return Promise.resolve(articles);
    }
}

export default ArticleAdapter;
