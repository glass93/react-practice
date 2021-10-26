import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // useEffect(() => {
  //   console.log('렌더링이 완료되었습니다!');
  //   console.log({
  //     name,
  //     nickname,
  //   });
  // });

  // useEffect(() => {
  //   console.log('마운트될 때만 실행됩니다.');
  // }, []);

  // 특정 값이 업데이트될 때만 실행하고 싶을 때
  // useEffect(() => {
  //   console.log(name);
  // }, [name]);

  // 뒷정리 하기
  // 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면
  // useEffect에서 뒷정리(cleanup) 함수를 반환하면 된다.
  // useEffect(() => {
  //   console.log('effect');
  //   console.log(name);
  //   return () => {
  //     console.log('cleanup');
  //     console.log(name);
  //   };
  // }, [name]);

  // 오직 언마운트될 때만 뒷정리 함수를 호출하고 싶다면
  // useEffect 함수의 두 번째 파라미터에 비어 있는 배열을 넣으면 된다.
  useEffect(() => {
    console.log('effect');
    return () => {
      console.log('unmount');
    };
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
