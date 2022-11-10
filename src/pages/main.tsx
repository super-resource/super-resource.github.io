import { main } from 'main'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { installIndexPage } from 'pages/index.page/install.index.page';
import isMobile from 'is-mobile';

export const appMain = () => {

  const ifMobile = isMobile();

  const { IndexPage } = installIndexPage({ isMobile: ifMobile });

  main(app => {
    app.set(() => (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    ));
  });
};
