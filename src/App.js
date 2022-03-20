import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'

const App = () => {
  return (
    <div className="App">
      <ChatEngine
        height='100vh'
        projectID='21c918b4-6522-44c7-bb52-3d38db838405'
        userName='shahidkhan'
        userSecret='12345'
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;