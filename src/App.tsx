import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import ResultBox from './components/ResultBox';
import { type Node } from './model/RBT/Node';
import { RBT } from './model/RBT/RBT';
import { GimmickGrylls, GimmickBroke, GimmickCollapse, GimmickBurn, GimmickWallpaper } from './model/Gimmicks';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [terjemahan, setTerjemahan] = useState('');
  const [example, setExample] = useState('');
  const [gimmick, setGimmick] = useState('');
  const [rbtId] = useState(() => new RBT());
  const [rbtEn] = useState(() => new RBT());
  const [isError, setIsError] = useState(false);
  const [selectValue, setSelectValue] = useState('id_en');

  useEffect(() => {
    rbtId.add('penyintas', 'survivor', 'bear grylls is a survivor', new GimmickGrylls());
    rbtId.add('miskin', 'poor', 'poor guy', new GimmickBroke());
    rbtId.add('apel', 'apple', 'eating apple is good for you');
    rbtId.add('makan', 'eat', 'you need to eat at least three times a day');
    rbtId.add('buku', 'book', 'reading book once a while feels comforting');
    rbtId.add('jatuh', 'fall', 'that thing can easily fall into that hole');
    rbtId.add('runtuh', 'collapse', 'that building collapse majestically', new GimmickCollapse());
    rbtId.add('cokelat', 'chocolate', 'chocolate is actually good for your health');
    rbtId.add('bakar', 'burn', 'let us burn this city', new GimmickBurn());
    rbtId.add('kereta', 'train', 'train is a very old mode of transportation');
    rbtId.add('tumbuh', 'grow', 'an oak tree can grow up to 43 meters tall');
    rbtId.add('kertas dinding', 'wallpaper', 'this room has a nice wallpaper', new GimmickWallpaper());

    rbtEn.add('poor', 'miskin', 'aku miskin sekali', new GimmickBroke());
    rbtEn.add('apple', 'apel', 'makan apel itu baik untuk kesehatanmu');
    rbtEn.add('eat', 'makan', 'kamu harus makan setidaknya tiga kali sehari');
    rbtEn.add('book', 'buku', 'membaca buku di pagi hari itu asik');
    rbtEn.add('survivor', 'penyintas', 'bear grylls adalah seorang penyintas', new GimmickGrylls());
    rbtEn.add('fall', 'jatuh', 'pria jantan itu jatuh bebas tanpa menggunakan parasut');
    rbtEn.add('collapse', 'runtuh', 'bangunan itu runtuh dengan sangat cantik', new GimmickCollapse());
    rbtEn.add('chocolate', 'cokelat', 'cokelat berwarna cokelat dan enak');
    rbtEn.add('burn', 'bakar', 'ayo bakar kota ini', new GimmickBurn());
    rbtEn.add('train', 'kereta', 'naik kereta di Indonesia sangat menyenangkan');
    rbtEn.add('grow', 'tumbuh', 'pohon oak bisa tumbuh sampai ketinggian 43 meter');
    rbtEn.add('wallpaper', 'kertas dinding', 'ruangan ini memiliki kertas gambar', new GimmickWallpaper());
  }, [rbtId, rbtEn]);

  const searchClicked = () => {
    if (!inputValue) return;

    setInputValue(inputValue.toLowerCase().trim());

    const nodeTerjemahan = selectValue === 'id_en' ? rbtId.find(inputValue) : rbtEn.find(inputValue);

    if (nodeTerjemahan) {
      setTerjemahan(nodeTerjemahan.getValue());
      setExample(nodeTerjemahan.getExample());
      handleGif(nodeTerjemahan);
      setIsError(false);
    } else {
      setTerjemahan('Kata Tidak Ditemukan');
      setExample('');
      setGimmick('');
      setIsError(true);
    }
  };

  const handleGif = (nodeTerjemahan: Node) => {
    const foundGimmick = nodeTerjemahan.getGimmick();

    if (foundGimmick) {
      setGimmick(foundGimmick.gimmick());
    } else {
      setGimmick('');
    }
  };

  return (
    <div
      style={{ justifyContent: terjemahan ? 'start' : 'center' }}
      className="flex min-h-screen w-screen flex-col gap-8 bg-slate-100"
    >
      <SearchBar
        isSearched={!!terjemahan}
        searchClicked={searchClicked}
        inputValue={inputValue}
        setInputValue={setInputValue}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
      />

      <ResultBox result={terjemahan} example={example} gimmick={gimmick} isError={isError} />
    </div>
  );
}
