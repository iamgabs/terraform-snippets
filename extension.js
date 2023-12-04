const vscode = require('vscode');
const path = require('path');

function activate(context) {
    // Caminho para o arquivo de snippet
    const snippetsFilePath = path.join(context.extensionPath, 'snippets/snippet.code-snippets');

    // Registrar o snippet
    const snippetDisposable = vscode.languages.registerCompletionItemProvider('terraform', {
        provideCompletionItems: () => {
            // Carregar os snippets do arquivo
            const snippets = require(snippetsFilePath);

            // Converter os snippets em itens de conclusão
            const completionItems = Object.keys(snippets).map(snippetName => {
                const snippet = snippets[snippetName];
                const completionItem = new vscode.CompletionItem(snippetName, vscode.CompletionItemKind.Snippet);
                completionItem.insertText = new vscode.SnippetString(snippet.body.join('\n'));
                completionItem.documentation = snippet.description || '';
                return completionItem;
            });

            return completionItems;
        },
    });

    context.subscriptions.push(snippetDisposable);
}

exports.activate = activate;

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
