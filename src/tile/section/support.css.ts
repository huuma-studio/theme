export default `.tile__support-section__wrapper {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    @media (min-width: 756px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (min-width: 960px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    gap: calc(var(--tile-spacing) * 4);
    padding-top: calc(var(--tile-spacing) * 2);
}
.tile__support__card {
    padding: calc(var(--tile-spacing) * 6);
    @media (min-width: 756px) {
        padding: calc(var(--tile-spacing) * 8);
    }
    background-color: var(--support-card-color-background, rgba(0, 0, 0, 0.05));
    container-type: inline-size;
}
.tile__support__card__header {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--spacing-2);
    margin-bottom: calc(var(--tile-spacing) * 6);
    @container (min-width: 20rem) {
        align-items: end;
        flex-direction: row;
    }
}
.tile__support__card__list__item {
    display: flex;
    font-size: 1.125rem;
    justify-content: space-between;
    margin-bottom: calc(var(--tile-spacing) * 4);
}
.tile__support__card__headline {
    margin-bottom: calc(var(--tile-spacing) * -1);
}
.tile__support__card__list__item:last-child {
    margin-bottom: calc(var(--tile-spacing) * 2);
}
.tile__support__card__header__price {
    line-height: 1.2;
}
.tile__support__card__header__price__prefix {
    font-weight: 500;
    letter-spacing: 0.0125rem;
    color: var(--tile-color-primary-text-500);
}

.tile__support__card__header__price__amount {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--tile-color-primary-text-600);
}
`;
