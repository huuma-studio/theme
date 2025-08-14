export default `.tile__fader {
    display: grid;
    gap: calc(var(--tile-spacing) * 8);
    grid-template-columns: repeat(2, minmax(0, 1fr));
    @media (min-width: 556px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (min-width: 767px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(5, minmax(0, 1fr));
    }
}

.tile__fader__items {
    position: relative;
    font-size: 1.5rem;
    @media (min-width: 756px) {
        font-size: 1.75rem;
    }
    font-weight: 600;
    text-transform: uppercase;
    height: 2.625rem;
    animation-name: blur;
    animation-duration: var(--animation-duration);
    animation-delay: var(--animation-delay);
    animation-iteration-count: infinite;
}

.tile__fader__item {
    position: absolute;
    color: var(--tile-color-primary-text-400);
}
.tile__fader__item--1 {
    opacity: 1;
    visibility: visible;
    animation-name: fadeIn;
    animation-duration: var(--animation-duration);
    animation-delay: var(--animation-delay);
    animation-direction: alternate;
    animation-iteration-count: infinite;
}
.tile__fader__item--2 {
    opacity: 0;
    visibility: hidden;
    animation-name: fadeOut;
    animation-duration: var(--animation-duration);
    animation-delay: var(--animation-delay);
    animation-direction: alternate;
    animation-iteration-count: infinite;
}

@keyframes blur {
    0% {
        filter: blur(0);
    }
    49% {
        filter: blur(0);
    }
    51% {
        filter: blur(0.5rem);
    }
    54% {
        filter: blur(0);
    }
    100% {
        filter: blur(0);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 1;
        visibility: visible;
    }
    49% {
        opacity: 1;
        visibility: visible;
    }
    54% {
        opacity: 0;
        visibility: hidden;
    }
    100% {
        opacity: 0;
        visibility: hidden;
    }
}

@keyframes fadeOut {
    0% {
        opacity: 0;
        visibility: hidden;
    }
    49% {
        opacity: 0;
        visibility: hidden;
    }
    54% {
        opacity: 1;
        visibility: visible;
    }
    100% {
        opacity: 1;
        visibility: visible;
    }
}
`;
