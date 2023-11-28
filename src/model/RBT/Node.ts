import { Gimmick } from '../Gimmick';

export class Node {
  private key: string;
  private right: Node | null;
  private left: Node | null;
  private parent: Node | null;
  private red: boolean;

  private value: string;
  private example: string;
  private gimmick: Gimmick;

  constructor(key: string, value: string, example: string, gimmick: Gimmick) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.red = true;

    this.value = value;
    this.example = example;
    this.gimmick = gimmick;
  }

  getKey() {
    return this.key;
  }

  getRight() {
    return this.right;
  }

  setRight(right: Node) {
    this.right = right;
  }

  getLeft() {
    return this.left;
  }

  setLeft(left: Node) {
    this.left = left;
  }

  getParent() {
    return this.parent;
  }

  setParent(parent: Node) {
    this.parent = parent;
  }

  isRed() {
    return this.red;
  }

  setRed(red: boolean) {
    this.red = red;
  }

  getValue() {
    return this.value;
  }

  getExample() {
    return this.example;
  }

  getGimmick() {
    return this.gimmick;
  }
}
