const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// 파일 목록을 반환하는 라우트
app.get('/files', (req, res) => {
  const directoryPath = '/Users/mac/Next_Shopping_Solution'; // 경로 설정

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).send('Server Error');
    } else {
      res.json(files);
    }
  });
});

// 파일 내용을 반환하는 라우트
app.get('/files/:filename', (req, res) => {
  const directoryPath = '/Users/mac/Next_Shopping_Solution'; // 경로 설정
  const filePath = path.join(directoryPath, req.params.filename);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('File not found');
    } else {
      res.type('text/plain; charset=utf-8').send(data);
    }
  });
});

// 서버가 8400번 포트에서 리스닝하도록 설정
app.listen(8400, () => {
  console.log('서버가 8400번 포트에서 실행 중입니다.');
});
