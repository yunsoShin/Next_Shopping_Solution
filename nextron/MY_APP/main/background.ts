import path from "path";
import { app, ipcMain } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";

const isProd = process.env.NODE_ENV === "production";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow("main", {
    width: 1300,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (isProd) {
    //await mainWindow.loadURL('app://./home')
    await mainWindow.loadURL("https://speedgo.domeggook.com/");
  } else {
    const port = process.argv[2];
    //await mainWindow.loadURL(`http://localhost:${port}/home`)
    await mainWindow.loadURL("https://speedgo.domeggook.com/");
    mainWindow.webContents.openDevTools();
  }
  await mainWindow.webContents.executeJavaScript(`
    const loginLink = document.querySelector('a.a1[href*="mem_formLogin.php"]');
    if (loginLink) {
      loginLink.click();
    } else {
      console.error('Login link not found');
    }
  `);
  await mainWindow.webContents.executeJavaScript(`
  const naverLoginLink = document.querySelector('#lSnsLinkNaver a');
  if (naverLoginLink) {
    naverLoginLink.click();
  } else {
    console.error('Naver login link not found');
  }
`);
  // 기존의 로그인 자동화 코드 아래에 추가
  // const clickButtonByIndex = async (index) => {
  //   await mainWindow.webContents.executeJavaScript(`
  //   (function() {
  //     const xpath = '/html/body/section/div[2]/div[3]/div[3]/div[3]/button[${index}]';
  //     const button = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  //     if (button && button.click) {
  //       button.click();
  //     } else {
  //       console.error('버튼 ' + index + '을 찾을 수 없습니다.');
  //     }
  //   })();
  // `);
  // };
})();

app.on("window-all-closed", () => {
  app.quit();
});

ipcMain.on("message", async (event, arg) => {
  event.reply("message", `${arg} World!`);
});
