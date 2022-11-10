import { main } from 'main'

export const appMain = () => {

  main(app => {
    app.set(() => (
      <div>
        react app
      </div>
    ));
  });
};
