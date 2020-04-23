import styled, {css} from 'styled-components';
import React ,{useState} from 'react';

const Time = () =>{
    const [num, setNum] = useState(3);
    const [phase, setPhase] = useState(0);

    const [Timestart, setTimestart] = useState(0);
    const [Timeto0, setTimeto0] = useState(0);
    const [Timetoe, setTimetoe] = useState(0);

    const [fault, setFault] = useState(0);

    const handleKeyPress =(event) =>{
        if(event.key==='Enter' && phase===2){
            setTimetoe(Date.now());
            setFault((Date.now()-(Timestart+2000))/1000);
            setPhase(1);
            console.log((Date.now()-(Timestart+2000))/1000);
        }
    }

    const Timecheck = () => {
        if (phase === 0) {
            setPhase(2);
            var start = Date.now();
            setTimestart(start);
            var Timer = setInterval(function () {
                var delta = Date.now() - start;
                setNum(3 - parseInt(delta / 1000));
                if ((3 - parseInt(delta / 1000)) === 1) {
                    setTimeto0(Date.now());
                    clearInterval(Timer);
                }
            }, 1000);
        }
    }

    const Setdata = () =>{
        setNum(3);
        setPhase(0);
        setTimestart(0);
        setTimeto0(0);
        setTimetoe(0);
        setFault(0);
    }

    return(
        <>
        {phase===0
            ?<Num color={"gray"}>{num}</Num>
            :<Num>{num}</Num>
        }
        <Entertext>1초에 맞춰 엔터를 눌러보세요</Entertext>
        <Nameinput placeholder={"2300 홍길동 00쪽 00번"} onKeyPress={handleKeyPress}></Nameinput>
        <Faulttime>
            {phase===1
                ?<>{fault > 0
                    ?<><Evaltext>조금 느렸습니다!</Evaltext><Colortext color={"#00FF2B"}>+{fault}</Colortext></>
                    :<>{fault === 0
                        ?<><Evaltext>완벽합니다!</Evaltext><Colortext color={"#006DFF"}>{fault}</Colortext></>
                        :<><Evaltext>조금 빨랐습니다!</Evaltext><Colortext color={"#FF0000"}>{fault}</Colortext></>
                    }</>
                }</>
                :<Blacktext><Evaltext color={"black"}>ㅁㄴㅇ</Evaltext>Hi</Blacktext>
            }
        </Faulttime>
        {phase === 1
            ?<Startbutton onClick={Setdata}>다시하기</Startbutton>
            :<Startbutton onClick={Timecheck}>시작하기</Startbutton>
        }
        </>
    )
}

const Entertext = styled.div`
    margin-top:50px;
    font-size:18px;
    color:gray;
    letter-spacing:2px;
`;

const Num = styled.div`
    color:white;
    font-size:150px;
    margin-top:50px;
    ${({color}) => color && css`
        color: ${color};
    `};
`;

const Nameinput = styled.input`
    margin-top:10px;
    width:400px;
    height:50px;
    border-radius:15px;
    border-style:none;
    padding-left:20px;
    font-size:20px;
    font-family: 'Jua', sans-serif;
`;

const Startbutton = styled.button`
    width:140px;
    height:50px;
    border-radius:15px;
    border-style:none;
    background-color:white;
    margin-top:40px;
    font-size:26px;
    font-family: 'Jua', sans-serif;
`;

const Faulttime = styled.div`
    margin-top:50px;
    color:white;
    font-size:100px; 
    font-family: 'Roboto Condensed', sans-serif;
    display:flex;
    flex-direction:column;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`; 

const Evaltext = styled.div`
    font-size:25px;
    color:gray;
    ${({color}) => color && css`
        color: ${color};
    `};
    font-family: 'Nanum Gothic Coding', monospace;
`;

const Blacktext = styled.div`
    color:black;
`

const Colortext = styled.div`
    ${({color}) => color && css`
        color: ${color};
    `};
`;

export default Time;