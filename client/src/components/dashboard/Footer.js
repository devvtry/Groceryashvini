import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

function CustomFooter() {
  return (
    <div>
      <Footer style={{ textAlign: 'center' }}>
        Built with ❤️ by{' '}
        <a
          href="http://www.themagnisys.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Incredible
        </a>
        |
        <a
          href="https://github.com/kanhaiya8542"
          rel="noopener noreferrer"
          target="_blank"
        >
          Github Repo
        </a>
      </Footer>
    </div>
  );
}

export default CustomFooter;
