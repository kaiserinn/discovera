import { Gimmick } from './Gimmick';

export class GimmickNull implements Gimmick {
  gimmick(): string {
    return '';
  }
}

export class GimmickGrylls implements Gimmick {
  gimmick(): string {
    return 'grylls.gif';
  }
}

export class GimmickBroke implements Gimmick {
  gimmick(): string {
    return 'broke.gif';
  }
}

export class GimmickCollapse implements Gimmick {
  gimmick(): string {
    return 'collapse.gif';
  }
}

export class GimmickBurn implements Gimmick {
  gimmick(): string {
    return 'burn.gif';
  }
}

export class GimmickWallpaper implements Gimmick {
  gimmick(): string {
    return 'wallpaper.gif';
  }
}
