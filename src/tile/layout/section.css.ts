export default `.tile__section--padding-y--0 {
    padding-block: 0;
}
.tile__section--padding-y-sm {
    padding-block: calc(var(--tile-spacing) * 4);
}
.tile__section--padding-y-md {
    padding-block: calc(var(--tile-spacing) * 8);
    scroll-margin: calc(var(--tile-spacing) * 8);
}
.tile__section--padding-y-lg {
    padding-block: calc(var(--tile-spacing) * 20);
    scroll-margin: calc(var(--tile-spacing) * 20);
}
.tile__section--padding-y-xl {
    padding-block: calc(var(--tile-spacing) * 23);
    scroll-margin: calc(var(--tile-spacing) * 8);
}
.tile__section__wrapper {
    margin-inline: auto;
    padding-inline: calc(var(--tile-spacing) * 4);
    @media (min-width: 960px) {
        padding-inline: calc(var(--tile-spacing) * 8);
    }
}
.tile__section__wrapper--max-w-full {
    max-width: 100%;
}
.tile__section__wrapper--max-w-4xl {
    max-width: var(--tile-max-w-4xl);
}
.tile__section__wrapper--max-w-7xl {
    max-width: var(--tile-max-w-7xl);
}

.tile__section__title {
    margin-top: calc(var(--tile-spacing) * 4);
    margin-bottom: calc(var(--tile-spacing) * 8);
}
`;
