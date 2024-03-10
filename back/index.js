const cors = require('cors');
const express = require('express');
const compression = require('compression');
const {indexRouter} = require('./src/router/indexRouter');
const {userRouter} = require('./src/router/userRouter');
const app = express();
const port = 3000;

/* express 미들웨어 설정 */

//cors 설정
app.use(cors()); //모두에게 개방(느슨한 보안설정)

//body json 파싱
app.use(express.json());

//HTTP 요청 압축
app.use(compression());


//라우터 분리
indexRouter(app);
userRouter(app);

app.listen(port, () => {
  console.log(`Express app listening at port: ${port}`)
});