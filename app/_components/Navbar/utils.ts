export const sidebarTransition = {
    open: {
        x: '0%',
        transition: {
            type: 'tween',
        },
    },
    closed: {
        x: '100%',
        transition: {
            type: 'tween',
            delay: 0.5,
        },
    },
};

export const itemsTransition = {
    open: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.3,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

export const itemTransition = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {
                stiffness: 1000,
                velocity: -100,
            },
        },
    },
    closed: {
        y: 30,
        opacity: 0,
        transition: {
            y: {
                stiffness: 1000,
            },
        },
    },
};
