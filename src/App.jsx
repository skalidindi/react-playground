import './App.css'
import { Button } from './Button';
import { withLoggingHOC } from './withLoggingHOC';
import { Child } from './Child';
import { RenderPropsComponent } from './RenderPropsComponent';
import { Effect } from './Effect';
import { Hook } from './Hook';
import { Form } from './Form';
import { Ref } from './Ref';

function App() {

  const ButtonWithLogging = withLoggingHOC(Button);



  return (
    <div style={{ display: 'flex', 'flex-direction': 'column', 'gap': '1rem'}}>
      <ButtonWithLogging style={{
          'background': 'purple',
          'padding': '0.5rem'
        }}
        onClick={() => console.log('click me outer')}>
      </ButtonWithLogging>

      <RenderPropsComponent>
        {(props) => <Child {...props} />}
      </RenderPropsComponent>

      <Effect />

      <Hook />

      <Form />

      <Ref />
    </div>
  )
}

export default App
