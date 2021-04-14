interface Tree {
    isEnd: boolean;
    children: Children;
}

interface Children {
    [prop: string]: Tree;
}

class Trie {
    private root: Tree;
    constructor() {
        this.root = {
            isEnd: false,
            children: {}
        }
    }

    insert(word: string, node: Tree = this.root): void {
        if (word === '') {
            return;
        }

        const char = word[0];

        if (node.children[char] === undefined) {
            node.children[char] = {
                isEnd: word.length === 1,
                children: {}
            }
        } else {
            node.children[char].isEnd = node.children[char].isEnd || word.length === 1;
        }

        this.insert(word.slice(1), node.children[char]);
    }

    search(word: string, node: Tree = this.root): boolean {
        const char = word[0];

        if (node.children[char] !== undefined) {
            if (word.length === 1 && node.children[char].isEnd) {
                return true;
            }

            return this.search(word.slice(1), node.children[char]);
        }

        return false;
    }

    startsWith(prefix: string, node: Tree = this.root): boolean {
        if (prefix === '') {
            return true;
        }

        const char = prefix[0];

        if (node.children[char] !== undefined) {
            return this.startsWith(prefix.slice(1), node.children[char]);
        }

        return false;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */