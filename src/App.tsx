import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import ResultBox from './components/ResultBox';
import { Node, RBT } from './RBT';

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
    rbtId.add('penyintas', 'survivor', 'bear grylss is a survivor');
    rbtId.add('miskin', 'poor', 'poor guy');
    rbtId.add('apel', 'apple', 'eating apple is good for you');
    rbtId.add('makan', 'eat', 'you need to eat at least three times a day');
    rbtId.add('buku', 'book', 'reading book once a while feels comforting');

    rbtEn.add('poor', 'miskin', 'aku miskin sekali');
    rbtEn.add('apple', 'apel', 'makan apel itu baik untuk kesehatanmu');
    rbtEn.add('eat', 'makan', 'kamu harus makan setidaknya tiga kali sehari');
    rbtEn.add('book', 'buku', 'membaca buku di pagi hari itu asik');
    rbtEn.add('survivor', 'penyintas', 'bear grylls adalah seorang penyintas');
  }, [rbtId, rbtEn]);

  const searchClicked = () => {
    if (!inputValue) return;
    const nodeTerjemahan =
      selectValue === 'id_en'
        ? rbtId.find(inputValue.toLowerCase())
        : rbtEn.find(inputValue.toLowerCase());
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
    const foundGimmick = nodeTerjemahan.gimmick();
    if (foundGimmick) {
      setGimmick(foundGimmick);
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

      <ResultBox
        result={terjemahan}
        example={example}
        gimmick={gimmick}
        isError={isError}
      />
    </div>
  );
}
