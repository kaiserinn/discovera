export class Node {
  private key: string;
  private value: string;
  private example: string;
  private left: Node | null;
  private right: Node | null;
  private parent: Node | null;
  private red: boolean;

  constructor(key: string, value: string, example: string) {
    this.key = key;
    this.value = value;
    this.example = example;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.red = true;
  }

  getLeft() {
    return this.left;
  }

  setLeft(left: Node) {
    this.left = left;
  }

  getRight() {
    return this.right;
  }

  setRight(right: Node) {
    this.right = right;
  }

  getParent() {
    return this.parent;
  }

  setParent(parent: Node) {
    this.parent = parent;
  }

  getKey() {
    return this.key;
  }

  getValue() {
    return this.value;
  }

  getExample() {
    return this.example;
  }

  isRed() {
    return this.red;
  }

  setRed(red: boolean) {
    this.red = red;
  }

  gimmick() {
    switch (this.key) {
      case 'penyintas':
      case 'survivor':
        return 'grylls.gif';
      case 'miskin':
      case 'poor':
        return 'broke.gif';
    }
  }
}
