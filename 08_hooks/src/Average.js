import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  // const onChange = (e) => {
  //   setNumber(e.target.value);
  // };

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

  // const onInsert = (e) => {
  //   const nextList = list.concat(parseInt(number));
  //   setList(nextList);
  //   setNumber('');
  // };

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    inputEl.current.focus(); // 등록 버튼을 눌렀을 때 포커스가 인풋으로 넘어가도록
  }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

  // list 배열의 내용이 바뀔 때만 getAverage 함수가 호출
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
