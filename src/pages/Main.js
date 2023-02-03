import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
	return (
		<div class="frame1">
				<div class="frame2">
					<div>
          				<div>
							<span class="cont1">로그인</span>
							<p class="cont2">돌아온신 것을 <br/>환영합니다</p>
							<p class="cont3">기존에 가입한 계정으로 로그인 해주세요!</p>
						</div>
        			</div>
					<div>
					<button type='button' onClick={()=>alert("hello!")} class="applebutton">
						<div class="buttoncont"> {/* logo + cont*/}
							<div class="logobackG"> {/* logo */}
								<svg width="24" height="24" viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd' d="M 16.3726 12.5086 C 16.3544 10.4873 18.0277 9.50387 18.1042 9.45809 C 17.1566 8.07644 15.6878 7.88766 15.1716 7.87261 C 13.938 7.74279 12.7413 8.61079 12.1129 8.61079 C 11.4719 8.61079 10.5042 7.88515 9.46125 7.90648 C 8.11911 7.92717 6.86352 8.70423 6.17489 9.91091 C 4.75373 12.3713 5.81364 15.9869 7.17522 17.9757 C 7.85633 18.9503 8.6522 20.0372 9.69393 19.9989 C 10.7131 19.9575 11.0938 19.3491 12.3236 19.3491 C 13.5422 19.3491 13.8997 19.9989 14.9621 19.9738 C 16.0559 19.9575 16.7445 18.9961 17.4018 18.0127 C 18.1889 16.8976 18.505 15.7969 18.5176 15.7404 C 18.4925 15.7323 16.394 14.9314 16.3726 12.5086 Z" fill="rgb(255,255,255)"></path>
								<path fill-rule='evenodd' clip-rule='evenodd' d="M 14.3655 6.56449 C 14.9137 5.87899 15.2887 4.9464 15.1846 4 C 14.3912 4.03512 13.3991 4.54877 12.8277 5.21921 C 12.3222 5.81001 11.8707 6.77835 11.9873 7.689 C 12.8785 7.75548 13.7936 7.23932 14.3655 6.56449 Z" fill="rgb(255,255,255)"></path>
								</svg>
							</div>
							<p style={{color:'white'}}>Apple 계정으로 로그인</p>
						</div> 
					</button>
					<button type='button' onClick={()=>alert("hello!")} class="kakaobutton">
						<div class="buttoncont">
							<div class="logobackG">
								<svg width="24" height="24" viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
								<path d="M 9.3737 19.7229 H 7.5 V 4.3925 L 9.3737 4 V 19.7229 Z M 14.3781 8.59452 L 15.8486 9.63348 L 12.2435 14.0433 L 16.4179 18.9149 L 14.9711 20 L 10.0378 14.1356 L 14.3781 8.59452 Z" fill="currentColor"></path>
								</svg>
							</div>
							<p>카카오톡으로 로그인</p>
						</div>
					</button>
					<button type='button' onClick={()=>alert("hello!")} class="googlebutton">
						<div class="buttoncont">
							<div class="logobackG">
								<svg width="24" height="24" viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
								<path d="M 7.625 12.0002 C 7.625 11.4752 7.7 10.9502 7.8875 10.4627 L 5.1125 8.3252 C 4.55 9.4502 4.25 10.6877 4.25 12.0002 C 4.25 13.3127 4.55 14.5502 5.1125 15.6377 L 7.8875 13.5002 C 7.7 13.0502 7.625 12.5252 7.625 12.0002 Z" fill="rgb(251, 188, 5)"></path>
								<path d="M 12.5004 7.125 C 13.6629 7.125 14.7129 7.5375 15.5379 8.2125 L 17.9379 5.8125 C 16.4754 4.5375 14.6004 3.75 12.5004 3.75 C 9.23785 3.75 6.42535 5.625 5.11285 8.3625 L 7.88785 10.5 C 8.52535 8.5125 10.3254 7.125 12.5004 7.125 Z" fill="rgb(234, 67, 53)"></path>
								<path d="M 15.2375 16.1627 C 15.1625 16.2377 15.05 16.2752 14.9375 16.3127 C 14.8625 16.3502 14.75 16.3877 14.6375 16.4627 H 14.6 C 14.525 16.5002 14.4125 16.5377 14.3 16.5752 C 14.2625 16.5752 14.2625 16.5752 14.225 16.6127 C 14.15 16.6502 14.0375 16.6877 13.9625 16.6877 C 13.925 16.6877 13.8875 16.6877 13.85 16.7252 C 13.775 16.7627 13.6625 16.7627 13.5875 16.8002 C 13.55 16.8002 13.475 16.8002 13.4375 16.8377 C 13.3625 16.8377 13.2875 16.8752 13.2125 16.8752 C 13.1375 16.8752 13.0625 16.8752 12.9875 16.9127 C 12.9125 16.9127 12.875 16.9127 12.8 16.9127 C 12.65 16.9127 12.5375 16.9127 12.3875 16.9127 C 10.2125 16.9127 8.4125 15.5252 7.775 13.5752 L 5 15.7127 C 6.425 18.3752 9.2375 20.2502 12.5 20.2502 C 12.7625 20.2502 12.9875 20.2502 13.25 20.2127 C 13.475 20.1752 13.7375 20.1752 13.9625 20.1002 C 13.9625 20.1002 13.9625 20.1002 14 20.1002 C 14.225 20.0627 14.45 19.9877 14.7125 19.9502 C 14.7125 19.9502 14.7125 19.9502 14.75 19.9502 C 14.975 19.8752 15.2 19.8002 15.425 19.7252 C 15.65 19.6502 15.875 19.5377 16.1 19.4252 C 16.7375 19.0877 17.375 18.6752 17.9 18.1877 L 15.2375 16.1627 Z" fill="rgb(52, 168, 83)"></path>
								<path d="M 18.425 17.6248 C 18.5 17.5123 18.575 17.4373 18.6875 17.3248 C 18.7625 17.2123 18.8375 17.1373 18.9125 17.0248 C 18.9875 16.9123 19.0625 16.8373 19.1 16.7248 C 19.1 16.7248 19.1 16.7248 19.1 16.6873 C 19.175 16.5748 19.2125 16.4623 19.2875 16.3873 C 19.2875 16.3873 19.2875 16.3498 19.325 16.3498 C 19.4 16.2373 19.4375 16.1248 19.475 16.0498 C 19.475 16.0498 19.475 16.0123 19.5125 16.0123 C 19.55 15.8998 19.625 15.7873 19.6625 15.7123 C 19.6625 15.6748 19.7 15.6748 19.7 15.6373 C 19.7375 15.5248 19.775 15.4123 19.8125 15.3373 C 19.8125 15.2998 19.85 15.2998 19.85 15.2623 C 19.8875 15.1498 19.925 15.0373 19.9625 14.9623 C 19.9625 14.9248 20 14.8873 20 14.8498 C 20.0375 14.7373 20.075 14.6623 20.075 14.5498 C 20.075 14.5123 20.1125 14.4748 20.1125 14.4373 C 20.15 14.3248 20.15 14.2498 20.1875 14.1373 C 20.1875 14.0998 20.225 14.0623 20.225 13.9873 C 20.2625 13.8748 20.2625 13.7998 20.2625 13.6873 C 20.2625 13.6498 20.2625 13.5748 20.3 13.5373 C 20.3 13.4248 20.3375 13.3123 20.3375 13.2373 C 20.3375 13.1998 20.3375 13.1248 20.3375 13.0873 C 20.3375 12.9748 20.3375 12.8623 20.375 12.7498 C 20.375 12.7123 20.375 12.6748 20.375 12.5998 C 20.375 12.4498 20.375 12.2623 20.375 12.1123 C 20.375 11.6248 20.3 11.0998 20.1875 10.6123 H 12.5 V 13.7998 H 16.925 C 16.8875 13.9498 16.85 14.0623 16.8125 14.1748 C 16.8125 14.2123 16.775 14.2498 16.775 14.2873 C 16.7375 14.3623 16.7 14.4748 16.6625 14.5498 C 16.6625 14.5873 16.625 14.6248 16.625 14.6248 C 16.5875 14.6998 16.55 14.8123 16.5125 14.8873 C 16.5125 14.9248 16.475 14.9248 16.475 14.9623 C 16.4375 15.0373 16.3625 15.1123 16.325 15.2248 C 16.325 15.2623 16.2875 15.2623 16.2875 15.2998 C 16.2125 15.3748 16.175 15.4498 16.1 15.5248 L 16.0625 15.5623 C 15.9875 15.6373 15.9125 15.7123 15.8375 15.7873 C 15.8375 15.7873 15.8375 15.7873 15.8 15.8248 C 15.725 15.8998 15.6125 15.9748 15.5375 16.0498 C 15.425 16.1248 15.35 16.1998 15.2375 16.2748 L 17.8625 18.2998 C 17.975 18.2248 18.05 18.1123 18.125 18.0373 C 18.2375 17.8123 18.3125 17.7373 18.425 17.6248 Z" fill="rgb(66, 133, 244)"></path>
								</svg>
							</div>
							<p style={{color:'white'}}>Google 계정으로 로그인</p>
						</div>
					</button>
					<button type='button' onClick={()=>alert("hello!")} class="facebookbutton">
						<div class="buttoncont">
							<div class="logobackG">
								<svg width="24" height="24" viewBox='0 0 2http://localhost:3001/4 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
								<path d="M 10.3551 19.017 H 13.1378 V 12.4269 H 15.258 L 15.5561 10.0621 H 13.1378 V 8.35935 C 13.1378 7.31881 14.2641 7.47647 14.2641 7.47647 H 15.523 V 5.30079 H 13.5685 C 13.5685 5.30079 12.2102 5.23773 11.2164 6.12061 C 10.2226 7.00349 10.4545 8.07557 10.4545 8.07557 V 10.0621 H 8.5 V 12.3954 H 10.3551 V 19.017 Z" fill="rgb(255,255,255)"></path>
								</svg>
							</div>
							<p style={{color:'white'}}>Facebook 계정으로 로그인</p>
						</div>
					</button>
					<Link to="/Email">
					<button type='button'  class="emailbutton">
						<div class="buttoncont"> {/* logo + cont*/}
							<div class="logobackG"> {/* logo */}
								<svg width="24" height="24" viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd' d="M 16.3726 12.5086 C 16.3544 10.4873 18.0277 9.50387 18.1042 9.45809 C 17.1566 8.07644 15.6878 7.88766 15.1716 7.87261 C 13.938 7.74279 12.7413 8.61079 12.1129 8.61079 C 11.4719 8.61079 10.5042 7.88515 9.46125 7.90648 C 8.11911 7.92717 6.86352 8.70423 6.17489 9.91091 C 4.75373 12.3713 5.81364 15.9869 7.17522 17.9757 C 7.85633 18.9503 8.6522 20.0372 9.69393 19.9989 C 10.7131 19.9575 11.0938 19.3491 12.3236 19.3491 C 13.5422 19.3491 13.8997 19.9989 14.9621 19.9738 C 16.0559 19.9575 16.7445 18.9961 17.4018 18.0127 C 18.1889 16.8976 18.505 15.7969 18.5176 15.7404 C 18.4925 15.7323 16.394 14.9314 16.3726 12.5086 Z" fill="rgb(255,255,255)"></path>
								<path fill-rule='evenodd' clip-rule='evenodd' d="M 14.3655 6.56449 C 14.9137 5.87899 15.2887 4.9464 15.1846 4 C 14.3912 4.03512 13.3991 4.54877 12.8277 5.21921 C 12.3222 5.81001 11.8707 6.77835 11.9873 7.689 C 12.8785 7.75548 13.7936 7.23932 14.3655 6.56449 Z" fill="rgb(255,255,255)"></path>
								</svg>
							</div>
							<p style={{fontweight:'900'}}>이메일 계정으로 로그인</p>
						</div> 
					</button>
					</Link>
					</div>
				</div>
		</div>
	);
};

export default Main;