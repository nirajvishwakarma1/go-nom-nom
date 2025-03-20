const header = React.createElement(
    "h1",
    { id: "heading" },
    [
        "Header",
        React.createElement("hr")
    ]
);
const footer = React.createElement(
    "h1",
    { id: "heading" },
    [
        React.createElement('hr'),
        "Footer"
    ]
);

const section1 = React.createElement(
    "section",
    { id: 'section1' },
    React.createElement(
        "div",
        { id: "parent" },
        [
            React.createElement(
                "div",
                { id: "child1" },
                [
                    React.createElement('h1', { id: 'heading1', abc: 'xyz' }, 'Child 1, Heading 1'),
                    React.createElement('h2', { id: 'heading2' }, 'Child 1, Heading 2'),
                    React.createElement('p', { id: 'paragraph' }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
                    React.createElement('hr', {}),
                ]
            ),
            React.createElement(
                "div",
                { id: 'child2' },
                [
                    React.createElement('h1', { id: 'heading1' }, "Child 2, Heading 1"),
                    React.createElement('h2', { id: 'heading2' }, "Child 2, Heading 2"),
                    React.createElement('p', { id: 'paragraph' }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
                ]
            )
        ]
    )
);

console.log(section1);


const rootHeader = ReactDOM.createRoot(document.getElementById('header'));
const root = ReactDOM.createRoot(document.getElementById("root"));
const rootFooter = ReactDOM.createRoot(document.getElementById('footer'));

rootHeader.render(header);
root.render(section1);
rootFooter.render(footer);