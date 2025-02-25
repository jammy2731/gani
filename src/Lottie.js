import { useState, useRef } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import t1 from "./t1.json";
import t2 from "./t2.json";
import i1 from "./img1.jpg";
import i2 from "./img2.jpg";
import i3 from "./img3.jpg";
import i4 from "./img4.jpg";
import i5 from "./img4.jpg";

const SequentialLottie = ({ onComplete }) => {
    const [showSecond, setShowSecond] = useState(false);
    const [isSecondStarted, setIsSecondStarted] = useState(false); // 두 번째 애니메이션이 한 번이라도 실행됐는지 여부
    const firstLottieRef = useRef(null);

    return (
        <div className="flex flex-col items-center">
            {/* 첫 번째 애니메이션 */}
            <Lottie
                lottieRef={firstLottieRef}
                animationData={t1}
                loop={false}
                onComplete={() => setShowSecond(true)} // 첫 번째 애니메이션이 끝나면 두 번째 애니메이션 실행
            />

            {/* 두 번째 애니메이션: 첫 번째가 끝난 후 실행됨 (무한 루프) */}
            {showSecond && (
                <Lottie
                    animationData={t2}
                    loop={true} // ❗ 무한 반복
                    onLoopComplete={() => setIsSecondStarted(true)} // 첫 루프가 끝나면 motion.div 표시
                />
            )}

            {/* 두 번째 애니메이션이 한 번이라도 실행되면 motion.div 표시 */}
            {isSecondStarted && (
                <motion.div
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{
                        ease: "easeInOut",
                        duration: 2,
                        x: {duration: 1},
                    }}
                    className="flex flex-col items-center w-full" // ✅ motion.div에 w-full 추가!
                >
                    <h3 style={{marginBottom: "10px", marginLeft: "10px", fontSize: "20px", fontWeight: "600"}}>
                        To.세상에서 가장 소중한 가은이에게
                    </h3>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>자기야! 생일 정말 정말 축하해! 🥳🎂🎉</p>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>내가 옛날에 자기만을 위한 앱 만들어준다고 했던거
                        생각나?! 그래서 한번 만들어봤습니당! 편지에 사진을 넣고 싶기도 했고 좀 특별하게 한번 해보고 싶었어!!</p>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>그래도 자기는 종이 편지를 더 좋아할거니깐 종이 버전도
                        있습니당~!</p>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>벌써 내가 자기 생일을 3번이나 챙겨줬어!! 시간이 너무
                        빨라?!</p>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>근데 이번에는 선물 고르는게 너무 어려웠어,,,, 그래서
                        고민하고 고민하다가 자기가 팔찌가 없는거 같아서 한번 골라봤습니당..!</p>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>오늘은 자기를 행복하게 해주고 싶어서 나도 어떻게 해줄까
                        고민을 많이 해보고 준비해본건데 자기가 마음에 안들면 다른걸로 바꿔올게,,, 자기 맘에 드는게 제일 중요한거니깐!
                    </p>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>근데 우리가 만난지 벌써 834일이나 됐다?!
                        자기 처음 만났을때는 머리가 엄청 짧고 노랬는데</p>
                    <img src={i1} alt="1"
                         style={{width: "50%", height: "auto", display: "block", margin: "10px auto"}}/>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>지금은 이렇게 길렀네??</p>
                    <img src={i4} alt="1"
                         style={{width: "50%", height: "auto", display: "block", margin: "10px auto"}}/>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>속초도 놀러가구</p>
                    <img src={i2} alt="1"
                         style={{width: "50%", height: "auto", display: "block", margin: "10px auto"}}/>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>코타키나발루도 놀러가구</p>
                    <img src={i3} alt="1"
                         style={{width: "50%", height: "auto", display: "block", margin: "10px auto"}}/>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>제천도 놀러가구</p>
                    <img src={i5} alt="1"
                         style={{width: "50%", height: "auto", display: "block", margin: "10px auto"}}/>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>여기저기 많이 다녔어!</p>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>생각해보면 지금까지 내가 행복했던 순간의 대부분은 자기랑
                        같이 보내왔던거 같아! 그래서 너무 너무 좋아! 그리고 내가 힘들때도 자기가 항상 가장 먼저 위로해줘서 너무 너무
                        고마웠어! 그래서 나는 아마 자기가 없었으면 많이 불행한 사람이었을거야,,ㅎㅎ</p>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>그리고 나는 요즘에 자기를 만나면 ‘이 사람과 함께라면 내
                        인생은 정말 괜찮겠구나’ 하는 생각이 들어! 이런게 찐사랑 아닐까 헤헿</p>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>그러니깐 자기도 나랑 같은 생각을 하고 오래 오래 만날 수 있게 자기한테 더 많이 사랑을 주고, 더 많이
                        행복하게 해주고 싶어! 내가 가끔 서운하게 할때도 있긴하지만,,,,,, 내가 의도를 가지고 그런거는 절대 아니니깐,,,
                        자기가 너그러운 마음으로 조금만 참아줘ㅠㅠ 그래도 빈도수를 줄이려고 항상 노력은 하고 있어!
                        언제 어디서든 나는 항상 자기 편이고, 자기가 행복한 사람이 될 수 있도록 함께할게!</p>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>그리고 한동안 내가 취업 때문에 우울한 모습을 많이
                        보여줬는데 앞으로는 조금 더 밝은 모습도 많이 보여주고 일도 열심히 하는 멋있는 사람이 되어볼게ㅎㅎ</p>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>오늘은 자기가 주인공이니깐 자기 하고 싶은거 다해!!
                        내가 오늘 준비한게 자기에게 최고의 하루가 될 수 있었으면 좋겠고 우리 앞으로도 이렇게만 계속 계속 만나자!</p>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>자기야 태어나줘서 너무 너무 고맙고 나는 자기를 평생
                        사랑할거라는걸 항상 기억해줘!!</p>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: "500"}}>내가 너무 사랑하고 오늘 생일 내가 제일
                        축하해💕💕</p>
                    <h3 style={{
                        marginBottom: "10px",
                        marginLeft: "10px",
                        fontSize: "20px",
                        fontWeight: "600"
                    }}>From.가은이를 세상에서 제일 제일 사랑하는 구승이..</h3>
                </motion.div>
            )}
        </div>
    );
};

export default SequentialLottie;
