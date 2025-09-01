export default `.tile__table__row {
    display: grid;
    grid-template-areas: "a a a" "b c d";
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-bottom: solid 1px #00000011;

    @media (min-width: 768px) {
        border-bottom: 0;
        grid-template-areas: "a b c d";
        grid-template-columns: 3fr 2fr 2fr 2fr;
    }
}
.tile__table__row > div:nth-child(1) {
    font-weight: 600;
    grid-area: a;
    @media (min-width: 768px) {
        font-weight: 500;
    }
}
.tile__table__row > div:nth-child(2) {
    grid-area: b;
}
.tile__table__row > div:nth-child(3) {
    grid-area: c;
}
.tile__table__row > div:nth-child(4) {
    grid-area: d;
}
.tile__table__row:nth-child(even) {
    @media (min-width: 768px) {
        background-color: #00000006;
    }
}
.tile__table__row--header {
    position: sticky;
    top: 3.125rem;
    border-bottom: solid 1px #00000011;
    font-weight: 500;
    background-color: var(--table-header-color-background, var(--tile-color-primary-background));
    color: var(--table-header-color-text, var(--tile-color-primary-text-900));
    @media (min-width: 960px) {
        top: 4.125rem;
    }
}
.tile__table__cell {
    overflow: hidden;
    text-overflow: ellipsis;
    padding-block: calc(var(--tile-spacing) * 4);
    padding-inline: 0;
    @media (min-width: 768px) {
        padding-inline: calc(var(--tile-spacing) * 4);
    }
}
`;
