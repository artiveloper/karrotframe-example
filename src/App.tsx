import React from 'react';
import {Navigator, Screen, useNavigator} from 'karrotframe'

const App: React.FC = () => {
  return (
      <Navigator>
        <Screen path='/' component={Home} />
        <Screen path='/detail' component={Detail} />
      </Navigator>
  );
}

const Home: React.FC = () => {

  const { push } = useNavigator();

  const onClickButton = () => {
    push('/detail');
  }

  return (
      <div>
        Home. <button onClick={onClickButton}>다음 페이지</button>
      </div>
  )
}

const Detail: React.FC = () => {
  return (
      <div>
        Detail.
      </div>
  )
}

export default App;
