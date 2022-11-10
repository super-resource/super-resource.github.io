import React from 'react';
import * as ReactDOM from 'react-dom/client';
import type { IObservableValue } from 'mobx';
import reportWebVitals from './reportWebVitals';
import * as mobx from 'mobx';
import * as mobxReact from 'mobx-react';

export type AppBox = IObservableValue<() => JSX.Element>;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export async function main(init: (app: AppBox) => void) {
  const app = mobx.observable.box(() => <div />, { deep: false });
  const App = mobxReact.observer(() => React.createElement(app.get()));

  await init(app);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
