import { Node } from './Node.ts';

export class RBT {
  private root: Node | null;

  constructor() {
    this.root = null;
  }

  add(key: string, value: string, example: string, gimmick: string = '') {
    const newNode = new Node(key, value, example, gimmick);

    if (!this.root) {
      newNode.setRed(false);
      this.root = newNode;
      return true;
    }

    let current: Node | null = this.root;
    while (current) {
      if (key < current.getKey()) {
        if (!current.getLeft()) {
          current.setLeft(newNode);
          newNode.setParent(current);
          break;
        }
        current = current.getLeft();
      } else if (key > current.getKey()) {
        if (!current.getRight()) {
          current.setRight(newNode);
          newNode.setParent(current);
          break;
        }
        current = current.getRight();
      } else {
        return false;
      }
    }
    current = newNode;

    const parent = current?.getParent();
    if (!parent) return false;
    const grandParent = parent.getParent();
    if (!grandParent) return false;

    if (!parent.isRed()) return true;
    while (current !== this.root && parent?.isRed()) {
      if (parent === grandParent.getLeft()) {
        if (grandParent.getRight()?.isRed()) {
          parent.setRed(false);
          grandParent.getRight()?.setRed(false);
          grandParent.setRed(true);
          current = grandParent;
        } else {
          if (current === parent.getRight()) {
            const temp = parent;
            this.rotateToLeft(parent);
            current = temp;
          }

          parent.setRed(false);
          grandParent.setRed(true);
          this.rotateToRight(grandParent);
        }
      } else {
        if (grandParent.getLeft()?.isRed()) {
          parent.setRed(false);
          grandParent.getLeft()?.setRed(false);
          grandParent.setRed(true);
          current = grandParent;
        } else {
          if (current === parent.getLeft()) {
            const temp = parent;
            this.rotateToRight(parent);
            current = temp;
          }

          parent.setRed(false);
          grandParent.setRed(true);
          this.rotateToLeft(grandParent);
        }
      }
    }

    this.root.setRed(false);
  }

  find(key: string) {
    let current = this.root;
    while (current) {
      if (key < current.getKey()) {
        current = current.getLeft();
      } else if (key > current.getKey()) {
        current = current.getRight();
      } else {
        return current;
      }
    }

    return null;
  }

  isExist(key: string): boolean {
    return Boolean(this.find(key));
  }

  rotateToRight(current: Node) {
    const parent = current.getParent();
    const currentLeft = current.getLeft();
    if (!currentLeft) return false;

    let temp = null;
    if (currentLeft.getRight()) {
      temp = currentLeft.getRight();
    }

    if (current === this.root) {
      this.root = currentLeft;
    }

    if (parent) {
      if (parent.getLeft() === current) {
        parent.setLeft(currentLeft);
      } else if (parent.getRight() === current) {
        parent.setRight(currentLeft);
      }
    }

    currentLeft.setParent(parent as Node);
    current.setParent(currentLeft);
    currentLeft.setRight(current);
    current.setLeft(temp as Node);

    if (temp) {
      temp.setParent(current);
    }
  }

  rotateToLeft(current: Node) {
    const parent = current.getParent();
    const currentRight = current.getRight();
    if (!currentRight) return false;

    let temp = null;
    if (currentRight.getLeft()) {
      temp = currentRight.getLeft();
    }

    if (current === this.root) {
      this.root = currentRight;
    }

    if (parent) {
      if (parent.getLeft() === current) {
        parent.setLeft(currentRight);
      } else if (parent.getRight() === current) {
        parent.setRight(currentRight);
      }
    }

    currentRight.setParent(parent as Node);
    current.setParent(currentRight);
    currentRight.setLeft(current);
    current.setRight(temp as Node);

    if (temp) {
      temp.setParent(current);
    }
  }

  public preOrder(root: Node | null = null): void {
    if (root === null) {
      if (this.root === null) {
        console.log([]);
      }

      root = this.root as Node;
    }

    root.isRed()
      ? console.log(`\x1b[31m${root.getKey()}`)
      : console.log(`\x1b[0m${root.getKey()}`);

    if (root.getLeft() != null) this.preOrder(root.getLeft());
    if (root.getRight() != null) this.preOrder(root.getRight());
  }

  public inOrder(root: Node | null = null): void {
    if (root === null) {
      if (this.root === null) {
        console.log([]);
      }

      root = this.root as Node;
    }

    if (root.getLeft() != null) this.inOrder(root.getLeft());
    root.isRed()
      ? console.log(`\x1b[31m${root.getKey()}`)
      : console.log(`\x1b[0m${root.getKey()}`);
    if (root.getRight() != null) this.inOrder(root.getRight());
  }

  public postOrder(root: Node | null = null): void {
    if (root === null) {
      if (this.root === null) {
        console.log([]);
      }

      root = this.root as Node;
    }

    if (root.getLeft() != null) this.postOrder(root.getLeft());
    if (root.getRight() != null) this.postOrder(root.getRight());
    root.isRed()
      ? console.log(`\x1b[31m${root.getKey()}`)
      : console.log(`\x1b[0m${root.getKey()}`);
  }

  public printNode(
    node = this.root,
    prefix = '',
    isTail = true,
    direction = '',
    childPrefix = ''
  ): void {
    if (node !== null) {
      const textColor = node.isRed() ? '\x1b[31m' : '\x1b[0m';

      const nodeIndicator = direction === '' ? '' : direction;

      console.log(
        prefix +
          (isTail ? '└── ' : '├── ') +
          textColor +
          nodeIndicator +
          node.getKey() +
          '\x1b[0m'
      );

      if (node.getLeft() !== null || node.getRight() !== null) {
        const newPrefix = prefix + (isTail ? '    ' : '│   ');

        if (node.getLeft() !== null) {
          this.printNode(
            node.getLeft(),
            newPrefix,
            false,
            'L ',
            childPrefix + '    '
          );
        }

        if (node.getRight() !== null) {
          this.printNode(
            node.getRight(),
            newPrefix,
            true,
            'R ',
            childPrefix + '    '
          );
        }
      }
    }
  }
}
