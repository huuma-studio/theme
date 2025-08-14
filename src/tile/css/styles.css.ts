export default `@import url("variables.css");
@import url("utils.css");

html {
    font-size: 1em;
    line-height: 1.5;
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    color: var(--tile-color-primary-text-700);
    background: var(--tile-color-primary-background);
}

svg {
    fill: var(--tile-color-primary-text-700);
}

.language-switcher {
    position: relative;
    padding-right: var(--spacing-2);
    border-right: 1px solid #00000020;
    margin-right: var(--spacing-2);
}

.language-switcher > button {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    padding: var(--spacing-1) var(--spacing-1) var(--spacing-1) var(--spacing-2);
}

.language-switcher > button:active {
    outline: 2px solid var(--primary-300);
}

.language-switcher__dropdown {
    position: absolute;
    left: 0;
    visibility: hidden;
    border: 1px solid var(--primary-300);
    background-color: var(--primary-100);
}
.language-switcher__dropdown--open {
    visibility: visible;
}
.language-switcher__dropdown__item {
    display: block;
    padding: var(--spacing-2) var(--spacing-3);
    background-color: var(--primary-100);
    border-bottom: 1px solid #00000010;
}
.language-switcher__dropdown__item:hover {
    background-color: #ffffff50;
}
li:last-child > .language-switcher__dropdown__item {
    border-bottom: 0;
}

a {
    text-decoration: underline;
}

sup {
    font-size: 0.75em;
    vertical-align: top;
    font-weight: 500;
}
`;
