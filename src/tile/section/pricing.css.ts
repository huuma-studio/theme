export default `.tile__pricing {
    background-color: var(--pricing-color-background);
    color: var(--pricing-color-text);
}
.tile__pricing__table__legend {
    display: flex;
    gap: calc(var(--tile-spacing) * 2);
    align-items: center;
    margin-block: calc(var(--tile-spacing) * 4);
    padding-left: calc(var(--tile-spacing) * 4);
}
.tile__pricing__table__legend__item {
    display: flex;
    align-items: center;
    gap: var(--tile-spacing);
}
.tile__pricing__table__cell--header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.tile__pricing__table__cell--header:nth-child(1) {
    display: none;
    @media (min-width: 756px) {
        display: inherit;
        align-items: center;
    }
}
.tile__pricing__feature-group {
    margin-top: calc(var(--tile-spacing) * 16);
    @media (min-width: 756px) {
        margin-top: calc(var(--tile-spacing) * 10);
    }
}

.tile__pricing__feature-group__title {
    margin-bottom: calc(var(--tile-spacing) * 4);
}

.tile__pricing__appendix,
.tile__pricing__legend {
    margin-block: calc(var(--tile-spacing) * 4);
    padding-left: calc(var(--tile-spacing) * 4);
    color: var(--pricing-legend-color-text, --tile-color-primary-text-400);
}
`;
