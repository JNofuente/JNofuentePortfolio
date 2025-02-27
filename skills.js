function containerClicked(containerNumber) {
    const links = {
        1: '/.vscode/Skills/Compskill.html',
        2: '/.vscode/Skills/Editing.html',
        3: '/.vscode/Skills/Time.html',
        4: '/.vscode/Skills/ITknowledge.html',
        5: '/.vscode/Skills/Solving.html',
        6: '/.vscode/Skills/Communication.html',
        7: '/.vscode/Skills/Thinking.html'
    };
    window.location.href = links[containerNumber];
}