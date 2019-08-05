const getFormattedSubtitle = (subtitle) => {
    return (subtitle.length < 75)
        ? subtitle
        : `${subtitle.slice(0, 75)}...`;
};

export {
    getFormattedSubtitle,
};
