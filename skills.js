function containerClicked(containerNumber) {
    const links = {
        1: 'Compskill.html',
        2: '/Editing.html',
        3: "Time.html",
        4: "/ITknowledge.html",
        5: '.Solving.html',
        6: ".Communication.html",
        7: "/.Thinking.html"
    };
    window.location.href = links[containerNumber];
}
