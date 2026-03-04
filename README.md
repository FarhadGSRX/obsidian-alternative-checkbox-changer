# Obsidian Alternative Checkbox Changer

An Obsidian plugin that lets you change [alternative checkboxes](https://minimal.guide/checklists) to any type via hotkeys.

Supported types: 
- (` `) unchecked 
- (`x`) done 
- (`/`) incomplete 
- (`-`) canceled 
- (`>`) forwarded 
- (`<`) scheduling 
- (`?`) question 
- (`!`) important 
- (`*`) star 
- (`"`) quote 
- (`l`) location 
- (`b`) bookmark 
- (`i`) information 
- (`S`) savings 
- (`I`) idea 
- (`p`) pros 
- (`c`) cons 
- (`f`) fire 
- (`k`) key 
- (`w`) win 
- (`u`) up 
- (`d`) down 

## Recommended Setup

This plugin pairs well with the [Sequence Hotkeys](https://github.com/moolric/obsidian-sequence-hotkeys) plugin, which lets you assign chord (multi-key) shortcuts.

For example, you can bind each checkbox type to `Ctrl+Alt+B` followed by its decorator character:

| Hotkey | Syntax | Description |
|---|---|---|
| `Ctrl+Alt+B`, ` ` | `- [ ]` | change to unchecked |
| `Ctrl+Alt+B`, `x` | `- [x]` | change to done |
| `Ctrl+Alt+B`, `/` | `- [/]` | change to incomplete |
| `Ctrl+Alt+B`, `-` | `- [-]` | change to canceled |
| `Ctrl+Alt+B`, `>` | `- [>]` | change to forwarded |
| `Ctrl+Alt+B`, `<` | `- [<]` | change to scheduling |
| `Ctrl+Alt+B`, `?` | `- [?]` | change to question |
| `Ctrl+Alt+B`, `!` | `- [!]` | change to important |
| `Ctrl+Alt+B`, `*` | `- [*]` | change to star |
| `Ctrl+Alt+B`, `"` | `- ["]` | change to quote |
| `Ctrl+Alt+B`, `l` | `- [l]` | change to location |
| `Ctrl+Alt+B`, `b` | `- [b]` | change to bookmark |
| `Ctrl+Alt+B`, `i` | `- [i]` | change to information |
| `Ctrl+Alt+B`, `S` | `- [S]` | change to savings |
| `Ctrl+Alt+B`, `I` | `- [I]` | change to idea |
| `Ctrl+Alt+B`, `p` | `- [p]` | change to pros |
| `Ctrl+Alt+B`, `c` | `- [c]` | change to cons |
| `Ctrl+Alt+B`, `f` | `- [f]` | change to fire |
| `Ctrl+Alt+B`, `k` | `- [k]` | change to key |
| `Ctrl+Alt+B`, `w` | `- [w]` | change to win |
| `Ctrl+Alt+B`, `u` | `- [u]` | change to up |
| `Ctrl+Alt+B`, `d` | `- [d]` | change to down |

## Usage

1. Place your cursor on a checkbox line (or select multiple lines).
2. Run the command from the command palette, or use your assigned hotkey.
3. Done. The checkbox decorator changes.

## Installation

Copy `main.js` and `manifest.json` into your vault at `.obsidian/plugins/obsidian-alternative-checkbox-changer/`, then enable the plugin in Obsidian settings.
