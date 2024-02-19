import puppeteer from "puppeteer";

const fillLoginId = async () => {
  // 로그인 아이디 입력란을 id 속성으로 찾습니다.
  var loginIdInput = document.getElementById("id");

  // 로그인 아이디 입력란의 값을 설정합니다.
  if (loginIdInput) {
    // @ts-ignore
    loginIdInput.value = "qwaszx5053";
  } else {
    console.log("로그인 아이디 입력란을 찾을 수 없습니다.");
  }
};
const updateSpeedGo = async (req, res) => {
  try {
    const url = "https://speedgo.domeggook.com/";

    const browser = await puppeteer.launch({ headless: false }); // headless: false로 설정하여 브라우저 UI를 표시
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 }); // 페이지 뷰포트 설정

    await page.goto(url); // 주어진 URL로 이동

    // 첫 번째 로그인 링크 클릭
    // 첫 번째 로그인 링크 클릭 대신
    await page.evaluate(() => {
      const loginLink = document.querySelector(
        'a.a1[href*="mem_formLogin.php"]'
      );
      if (loginLink) {
        // @ts-ignore
        loginLink.click();
      } else {
        console.error("Login link not found");
      }
    });

    // 페이지 내에서 네트워크 요청이나 다른 페이지 로딩이 완료될 때까지 기다림 (예: 로그인 페이지로의 리다이렉트)
    await page.waitForNavigation();
    //추가로 , 환경변수로 설정한 로그인 비밀번호 작성하는 코드를 실행하고 , 로그인 한 이후에는 업데이트 실행
    // 두 번째 네이버 로그인 링크 클릭
    await page.evaluate(() => {
      const naverLoginLink = document.querySelector("#lSnsLinkNaver a");
      if (naverLoginLink) {
        // @ts-ignore
        naverLoginLink.click();
      } else {
        console.error("Naver login link not found");
      }
    });
    await page.waitForNavigation();

    const loginId = ""; // 입력할 아이디 값
    const loginPw = ""; // 입력할 비밀번호 값

    await page.type("#id", loginId); // 아이디 입력 필드에 값을 타이핑합니다.
    // 비밀번호를 입력하는 함수를 비동기로 정의합니다.
    const typePasswordWithRandomDelay = async (page, selector, password) => {
      await page.click(selector); // 비밀번호 입력 필드를 클릭하여 포커스를 맞춥니다.
      for (const char of password) {
        await page.keyboard.press(char); // 각 문자를 개별적으로 입력합니다.
        await page.waitForTimeout(Math.random() * 100 + 50); // 50ms에서 150ms 사이의 무작위 지연을 추가합니다.
      }
    };

    // updateSpeedGo 함수 내에서 비밀번호 입력 부분을 수정합니다.
    // 비밀번호 입력
    await typePasswordWithRandomDelay(page, "#pw", ""); // 수정된 비밀번호 입력 함수를 호출합니다.

    // await fillLoginId();

    // 페이지 내에서 네트워크 요청이나 다른 페이지 로딩이 완료될 때까지 기다림 (예: 로그인 페이지로의 리다이렉트)

    // 로그인 과정 완료 후 추가 작업...
    // 예: 로그인 후 페이지의 특정 요소가 로드될 때까지 기다림
    // await page.waitForSelector('selector_of_an_element_after_login');
    await page.evaluate(() => {
      const loginButton = document.querySelector("#log\\.login"); // CSS 선택자에서 특수문자를 이스케이프 처리
      if (loginButton) {
        // @ts-ignore
        loginButton.click(); // 로그인 버튼 클릭
      } else {
        console.error("Login button not found");
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default updateSpeedGo;
