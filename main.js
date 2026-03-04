/* Code heavily inspired by obsidian-text-format plugin */

'use strict';
var obsidian = require('obsidian');

const DECORATORS = {
    todo: " ", incomplete: "/", done: "x", canceled: "-",
    forwarded: ">", scheduling: "<", question: "?", important: "!",
    star: "*", quote: '"', location: "l", bookmark: "b",
    information: "i", savings: "S", idea: "I", pros: "p",
    cons: "c", fire: "f", key: "k", win: "w", up: "u", down: "d"
};

/*
$1 is before the checkbox decoration
and $3 is everything after
Access the checkbox decorator with $2
*/
function exchangeCheckboxContents(selectedText, target_type) {
    const checkbox_signature = new RegExp("(\\s*- \\[)(.)(\\] .*)", "gm");
    const decorator = DECORATORS[target_type];
    return selectedText.replace(checkbox_signature, `$1${decorator}$3`);
}


class AlternativeCheckboxChanger extends obsidian.Plugin {
    onload() {
        this.addCommand({
            id: "alternative-checkbox-changer-todo",
            name: "Change selected checkbox to type: unchecked",
            callback: () => this.changeCheckboxType("todo"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-incomplete",
            name: "Change selected checkbox to type: incomplete (/)",
            callback: () => this.changeCheckboxType("incomplete"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-done",
            name: "Change selected checkbox to type: done (x)",
            callback: () => this.changeCheckboxType("done"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-canceled",
            name: "Change selected checkbox to type: canceled (-)",
            callback: () => this.changeCheckboxType("canceled"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-forwarded",
            name: "Change selected checkbox to type: forwarded (>)",
            callback: () => this.changeCheckboxType("forwarded"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-scheduling",
            name: "Change selected checkbox to type: scheduling (<)",
            callback: () => this.changeCheckboxType("scheduling"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-question",
            name: "Change selected checkbox to type: question (?)",
            callback: () => this.changeCheckboxType("question"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-important",
            name: "Change selected checkbox to type: important (!)",
            callback: () => this.changeCheckboxType("important"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-star",
            name: "Change selected checkbox to type: star (*)",
            callback: () => this.changeCheckboxType("star"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-quote",
            name: 'Change selected checkbox to type: quote (")',
            callback: () => this.changeCheckboxType("quote"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-location",
            name: "Change selected checkbox to type: location (l)",
            callback: () => this.changeCheckboxType("location"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-bookmark",
            name: "Change selected checkbox to type: bookmark (b)",
            callback: () => this.changeCheckboxType("bookmark"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-information",
            name: "Change selected checkbox to type: information (i)",
            callback: () => this.changeCheckboxType("information"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-savings",
            name: "Change selected checkbox to type: savings (S)",
            callback: () => this.changeCheckboxType("savings"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-idea",
            name: "Change selected checkbox to type: idea (I)",
            callback: () => this.changeCheckboxType("idea"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-pros",
            name: "Change selected checkbox to type: pros (p)",
            callback: () => this.changeCheckboxType("pros"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-cons",
            name: "Change selected checkbox to type: cons (c)",
            callback: () => this.changeCheckboxType("cons"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-fire",
            name: "Change selected checkbox to type: fire (f)",
            callback: () => this.changeCheckboxType("fire"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-key",
            name: "Change selected checkbox to type: key (k)",
            callback: () => this.changeCheckboxType("key"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-win",
            name: "Change selected checkbox to type: win (w)",
            callback: () => this.changeCheckboxType("win"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-up",
            name: "Change selected checkbox to type: up (u)",
            callback: () => this.changeCheckboxType("up"),
        });
        this.addCommand({
            id: "alternative-checkbox-changer-down",
            name: "Change selected checkbox to type: down (d)",
            callback: () => this.changeCheckboxType("down"),
        });
    }

    changeCheckboxType(target_type) {
        let markdownView = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        if (!markdownView) {
            return;
        }
        let editor = markdownView.editor;
        let somethingSelected = editor.somethingSelected();
        let originalCursor = editor.getCursor();

        // if nothing is selected, select the whole line.
        if (!somethingSelected) {
            let cursor = editor.getCursor();
            cursor.ch = 0;
            let aos = editor.posToOffset(cursor);
            cursor.line += 1;
            let hos = editor.posToOffset(cursor);
            if (cursor.line <= editor.lastLine()) {
                // don't select the next line which is not selected by user
                hos -= 1;
            }
            editor.setSelection(editor.offsetToPos(aos), editor.offsetToPos(hos));
        }
        let from = editor.getCursor("from"), to = editor.getCursor("to");

        // adjust selection
        if (to.line <= editor.lastLine()) {
            editor.setSelection(from, editor.offsetToPos(editor.posToOffset(to) - 1));
        }
        else {
            editor.setSelection(from, to);
        }

        let selectedText = editor.getSelection();
        let replacedText = exchangeCheckboxContents(selectedText, target_type);

        // change text only when two values are different
        if (replacedText != selectedText) {
            editor.replaceSelection(replacedText);
        }

        // restore cursor position
        if (!somethingSelected) {
            editor.setCursor(originalCursor);
        }
    }
}
module.exports = AlternativeCheckboxChanger;
