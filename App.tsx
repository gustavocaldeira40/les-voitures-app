import 'react-native-gesture-handler'
import { LogBox } from 'react-native'
import App from './src'

LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() // Ignore all log notifications

export default App
