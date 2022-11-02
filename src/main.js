import { Button } from './components/Button.js';

const container = document.getElementById('root');
const ReactDomRoot = ReactDOM.createRoot(container);

ReactDomRoot.render(
  <React.StrictMode>
    <Button>업로드</Button>
    <Button>업로드 중</Button>
    <Button>완료</Button>
    <Button>실패</Button>
    <Button disabled>업로드</Button>
  </React.StrictMode>
);
