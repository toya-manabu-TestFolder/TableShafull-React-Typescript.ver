import "./App.css";
import { useState } from "react";

export function App() {
  let userList: string[] = [
    "高橋 祐香",
    "杉浦 早紀",
    "獅子堂 孝雄",
    "中嶋 勇樹",
    "遠矢 学",
    "加藤 珠生",
    "佐藤 勇太",
    "坂本 真由",
    "中川 瑞貴",
    "小林 颯人",
    "堀川 裕基",
  ];

  let userCount: number = userList.length;
  let teamCountFun = (userCount: number): number => {
    if (13 <= userCount) {
      return 4;
    } else if (userCount <= 12 && 9 <= userCount) {
      return 3;
    } else if (userCount <= 8 && 5 <= userCount) {
      return 2;
    } else {
      return 1;
    }
  };
  let teamCount: number = teamCountFun(userCount);

  const [newUserList, setnewUserList] = useState<string[]>([]);
  const [startBtn, setStartBtn] = useState<boolean>(false);
  const [displayAnimation1, setdisplayAnimation1] = useState<boolean>(false);
  const [BigSbowmanDisplay, setBigSbowmanDisplay] = useState<boolean>(false);
  const [btnDisable, setbtnDisable] = useState<boolean>(false);
  // const [userDisplay, setuserDisplay] = useState<boolean>(false);
  const [displayAnimation2, setdisplayAnimation2] = useState<boolean>(false);

  // スタートボタン関連-------------------------------------
  let startCreateBtn = (userCount: number) => {
    let randomNumArr: number[] = [];
    function intRandom() {
      return Math.floor(Math.random() * userCount);
    }

    for (let i = 1; i <= userCount; i++) {
      while (true) {
        let tmp = intRandom();
        if (!randomNumArr.includes(tmp)) {
          randomNumArr.push(tmp);
          break;
        }
      }
    }

    let val: string[] = [];
    for (let i = 0; i < randomNumArr.length; i++) {
      val.push(userList[randomNumArr[i]]);
    }
    setnewUserList(val);

    let trueSet: boolean = true;
    let falseSet: boolean = false;
    setStartBtn(trueSet);
    setdisplayAnimation1(trueSet);
    setTimeout(() => {
      setdisplayAnimation1(falseSet);
    }, 1000);
  };

  //リセットボタン関連------------------------------
  let resetCreateBtn = (userCount: number) => {
    let randomNumArr: number[] = [];
    function intRandom() {
      return Math.floor(Math.random() * userCount);
    }
    for (let i = 1; i <= userCount; i++) {
      while (true) {
        let tmp = intRandom();
        if (!randomNumArr.includes(tmp)) {
          randomNumArr.push(tmp);
          break;
        }
      }
    }

    let val: string[] = [];
    for (let i = 0; i < randomNumArr.length; i++) {
      val.push(userList[randomNumArr[i]]);
    }

    setnewUserList(val);
  };

  let createTable = (Count: number) => {
    let items = [];
    let num: number[] = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ];
    for (let i = 1; i <= Count; i++) {
      items.push(
        <table
          id={`table${i}`}
          className={`
        ${startBtn ? "" : "displayNone"}
        ${displayAnimation1 ? "tableAnimetion1" : ""}
        ${displayAnimation2 ? "tableAnimetion2" : ""}
        `}
          key={i}
        >
          <tbody>
            <tr>
              <td>{newUserList[num[0]]}</td>
              <td>{newUserList[num[1]]}</td>
            </tr>
            <tr>
              <td>{newUserList[num[2]]}</td>
              <td>{newUserList[num[3]]}</td>
            </tr>
          </tbody>
        </table>
      );
      for (let i = 1; i <= 4; i++) {
        num.shift();
      }
    }
    return items;
  };

  const BigSbowmanUpp = () => {
    let trueSet: boolean = true;
    let falseSet: boolean = false;
    setBigSbowmanDisplay(trueSet);
    setTimeout(() => {
      setBigSbowmanDisplay(falseSet);
    }, 2000);
  };

  const btnDisableSet = () => {
    let trueSet: boolean = true;
    let falseSet: boolean = false;
    setbtnDisable(trueSet);
    setTimeout(() => {
      setbtnDisable(falseSet);
    }, 2000);
  };

  const userChange = () => {
    let trueSet: boolean = true;
    let falseSet: boolean = false;

    setdisplayAnimation2(trueSet);

    setTimeout(() => {
      setdisplayAnimation2(falseSet);
    }, 1000);
  };

  return (
    <>
      <div id="BigSnowManBox">
        <span
          id="BigSnowHead"
          className={`BigSnowHead ${
            BigSbowmanDisplay ? "" : "BigSbowmanDisplay"
          }`}
        >
          <span className="BighatBrim"></span>
          <span className="BighatRibon"></span>
          <span className="BighatHead"></span>
          <span className="BigsnowEyeLeft"></span>
          <span className="BigsnowEyeRight"></span>
          <span className="BigsnowEyeBrowLeft"></span>
          <span className="BigsnowEyeBrowRight"></span>
          <span className="BigsnowNose"></span>
          <span className="BigsnowMouth1"></span>
          <span className="BigsnowMouth2"></span>
        </span>
        <span
          id="BigSnowbody"
          className={`BigSnowbody ${
            BigSbowmanDisplay ? "" : "BigSbowmanDisplay"
          }`}
        >
          <span className="BigleftHand"></span>
          <span className="BigleftFinger1"></span>
          <span className="BigleftFinger2"></span>
          <span className="BigleftFinger3"></span>
          <span className="BigrightHand"></span>
          <span className="BigrightFinger1"></span>
          <span className="BigrightFinger2"></span>
          <span className="BigrightFinger3"></span>
        </span>
      </div>
      <div id="secbox">
        <div id="sec1">
          <div id="front">
            <span>Front</span>
          </div>
          <div id="exit">
            <span>EXIT</span>
          </div>
          <>{createTable(teamCount)}</>
        </div>
      </div>
      {/* 雪だるま */}
      <div id="snowManBox">
        <span className="snowbody">
          {/* スタートボタン */}
          <button
            id="StartBtn"
            className={startBtn ? "displayNone" : ""}
            onClick={() => {
              startCreateBtn(userCount);
            }}
          >
            スタート
          </button>
          {/* リセットボタン */}
          <button
            id="ResetBtn"
            onClick={() => {
              setTimeout(() => {
                userChange();
              }, 1000);
              btnDisableSet();
              BigSbowmanUpp();
              setTimeout(() => {
                resetCreateBtn(userCount);
              }, 1000);
            }}
            disabled={btnDisable}
          >
            リセット
          </button>
          <span className="leftHand"></span>
          <span className="leftFinger1"></span>
          <span className="leftFinger2"></span>
          <span className="leftFinger3"></span>
          <span className="rightHand"></span>
          <span className="rightFinger1"></span>
          <span className="rightFinger2"></span>
          <span className="rightFinger3"></span>
        </span>
        <span className="snowHead">
          <span className="hatBrim"></span>
          <span className="hatRibon"></span>
          <span className="hatHead"></span>
          <span className="snowEyeLeft"></span>
          <span className="snowEyeRight"></span>
          <span className="snowEyeBrowLeft"></span>
          <span className="snowEyeBrowRight"></span>
          <span className="snowNose"></span>
          <span className="snowMouth"></span>
        </span>
      </div>
    </>
  );
}

export default App;
