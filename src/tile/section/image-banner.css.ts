export default `.tile__image-banner {
    background-color: var(--image-banner-color-background);
    color: var(--image-banner-color-text);
}

.tile__image-banner__wrapper {
    display: flex;
    justify-content: center;
    margin-inline: auto;
    margin-bottom: calc(var(--tile-spacing) * 16);
    padding-inline: calc(var(--tile-spacing) * 8);
    padding-block: calc(var(--tile-spacing) * 16);
    background-color: var(--image-banner-wrapper-color-background, var(--tile-color-gray-100));
}

.tile__image-banner__image {
    max-width: var(--tile-max-w-7xl);
    width: 100%;
    height: auto;
}
`;
