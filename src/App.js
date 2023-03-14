// One advantage useRef has over useState could be well stated as “the reference does not trigger a re-render,
// but in state, when state is updated it triggers a re-render.

import { CountRenders } from './pages/CountRenders';
import { CountRendersWithRef } from './pages/CountRendersWithRef';
import { StopWatchTimer } from './pages/StopWatchTimer';

function App() {
  return (
    <div className='App'>
      <h4>app</h4>
      {/* <CountRenders /> */}
      <CountRendersWithRef />
      <hr />
      <StopWatchTimer />
    </div>
  );
}

export default App;
