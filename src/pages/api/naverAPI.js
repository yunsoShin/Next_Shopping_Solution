import request from "request";

export default async (req, res) => {
  var client_id = process.env.NEXT_NAVER_ID_KEY;
  var client_secret = process.env.NEXT_NAVER_SECRET_KEY;
  var api_url = "https://openapi.naver.com/v1/datalab/search";
  var request_body = {
    startDate: "2023-01-01",
    endDate: "2023-04-30",
    timeUnit: "month",
    keywordGroups: [
      {
        groupName: "한글",
        keywords: ["한글", "korean"],
      },
      {
        groupName: "영어",
        keywords: ["영어", "english"],
      },
    ],
    device: "pc",
    ages: ["15", "25"],
    gender: "m",
  };

  request.post(
    {
      url: api_url,
      body: JSON.stringify(request_body),
      headers: {
        "X-Naver-Client-Id": client_id,
        "X-Naver-Client-Secret": client_secret,
        "Content-Type": "application/json",
      },
    },
    function (error, response, body) {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json({ body });
      }
    }
  );
};
